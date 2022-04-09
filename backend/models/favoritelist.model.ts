import mongoose from "mongoose";

const FavoriteList = new mongoose.Schema(
  {
    listName: {
      type: String,
      maxlength: [100, "Name must be less than 100 characters"],
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    listItems: [
      {
        title: {
          type: String,
          maxlength: [100, "Title must be less than 100 characters"],
          required: true,
        },
        imageUrl: {
          type: String,
          maxlength: [2048, "ImageUrl must be less than 2048 characters"],
          required: true,
        },
        recipeId: {
          type: Number,
          required: true,
        },
        timeOfFavorite: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { collection: "favoritelists" }
);

FavoriteList.index({ userId: 1, listName: 1 }, { unique: true });

const model = mongoose.model("FavoriteList", FavoriteList);

export default model;
