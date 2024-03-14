import { type SchemaTypeDefinition } from 'sanity'

const pet = {
  name: "pet",
  title: "Pet",
  type: "document",

  fields: [
    {
      name: "pet_name",
      title: "Pet Name",
      type: "string"
    }
  ] 
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet],
}
