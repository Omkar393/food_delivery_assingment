import { itemsModel, organizationModel, pricingModel } from "../schemas/index.js"

// API to calculate total price of an item
export const calculateTotalPrice = async (req, res) => {
    let totalPrice, calculateDistance, base_distance, fix_price, km_price, itemId
    // Get values from API request
    const { zone, organization_id, total_distance, item_type } = req.body
    try {
        const foundOrganization = await organizationModel.findById({ _id: organization_id })

        if (!foundOrganization)
            return res.status(203).json({ message: "Organization not found" })

        const foundItemType = await itemsModel.find({ organization_id })

        if (foundItemType.length === 0)
            return res.status(203).json({ message: "Item type are not valid" })

        // Extracted item id by item type
        const findItemId = foundItemType.filter((data) => data.item_type === item_type).map((item) => item._id)
        const extractedId = findItemId.find((id) => id)
        itemId = extractedId.toString()

        // Check pricing details by item id
        const findPricingDetailsByItemId = await pricingModel.findOne({ item_id: itemId })
        if (!findPricingDetailsByItemId)
            return res.status(203).json({ message: "Pricing details are missing" })

        // Calculate total price by zone & item type
        if (findPricingDetailsByItemId.zone === zone) {
            base_distance = findPricingDetailsByItemId.base_distance
            fix_price = parseFloat(findPricingDetailsByItemId.fix_price)
            if (total_distance > base_distance) {
                calculateDistance = parseFloat(total_distance - base_distance)
                if (item_type === "Perishable") {
                    km_price = parseFloat(findPricingDetailsByItemId.km_perishable_price)
                } else if (item_type === "Non Perishable") {
                    km_price = parseFloat(findPricingDetailsByItemId.km_non_perishable_price)
                }

                const totalPrice = km_price * calculateDistance + fix_price
                return res.status(200).json({ totalPrice })
            }
            totalPrice = fix_price
            return res.status(200).json({ totalPrice })
        }
    } catch (error) {
        console.log(error);
    }

}
