import { ShapeStream, Shape } from "@electric-sql/client";

const stream = new ShapeStream({
  url: `http://localhost:5173/v1/shape`,
  params: {
    table: "items",
  },
});
const shape = new Shape(stream);

// The callback runs every time the Shape data changes.
shape.subscribe((data) => console.log(data));
