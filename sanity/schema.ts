import { type SchemaTypeDefinition } from "sanity";

import experience from "./schemaTypes/experience";
import project from "./schemaTypes/project";
import skill from "./schemaTypes/skill";
import social from "./schemaTypes/social";
import pageInfo from "./schemaTypes/pageInfo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, pageInfo, project, skill, social],
};
