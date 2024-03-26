import mongoose from "mongoose";

const Schema = mongoose.Schema

// Created a schema to store organizations
const organizationSchema = new Schema({
    name: { type: String, required: true },
    date_time: { type: Date }
})
export const organizationModel = mongoose.model("organization", organizationSchema, "organization")

// Created a schema to store items type & description
const itemsSchema = new Schema({
    organization_id: { type: mongoose.Schema.Types.ObjectId, ref: "organization" },
    item_type: { type: String, required: true },
    description: { type: String },
    date_time: { type: Date }
})
export const itemsModel = mongoose.model("items", itemsSchema, "items")

// Created a schema to store pricing details
const pricingSchema = new Schema({
    organization_id: { type: mongoose.Schema.Types.ObjectId, ref: 'organization' },
    item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'items' },
    zone: { type: String, required: true },
    base_distance: { type: Number, required: true },
    km_perishable_price: { type: Number, required: true },
    km_non_perishable_price: { type: Number, required: true },
    fix_price: { type: String, required: true },
    date_time: { type: Date }
})

export const pricingModel = mongoose.model("pricing", pricingSchema, "pricing")