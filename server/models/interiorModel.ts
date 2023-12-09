import mongoose, {Schema} from "mongoose";

const interiorSchema = new Schema({
    size: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    color: {
        name: {
            type: String,
            required: true
        },
        HEX: {
            type: String,
            required: true
        }
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: true
    }
});

export const TableModel = mongoose.model('Table', interiorSchema);
export const ChairModel = mongoose.model('Chair', interiorSchema);
export const ClosetModel = mongoose.model('Closet', interiorSchema);