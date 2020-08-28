/**
 * This file was generated by Noderalis Engram
 * Do not make changes to this file directly
 */







declare global {
  interface EngramGen extends EngramGenTypes {}
}

export interface EngramGenInputs {
}

export interface EngramGenEnums {
}

export interface EngramGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface EngramGenRootTypes {
  Post: { // root type
    body: string; // String!
    id: number; // Int!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Query: {};
}

export interface EngramGenAllTypes extends EngramGenRootTypes {
  String: EngramGenScalars['String'];
  Int: EngramGenScalars['Int'];
  Float: EngramGenScalars['Float'];
  Boolean: EngramGenScalars['Boolean'];
  ID: EngramGenScalars['ID'];
}

export interface EngramGenFieldTypes {
  Post: { // field return type
    body: string; // String!
    id: number; // Int!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Query: { // field return type
    drafts: EngramGenRootTypes['Post'][]; // [Post!]!
  }
}

export interface EngramGenArgTypes {
}

export interface EngramGenAbstractResolveReturnTypes {
}

export interface EngramGenInheritedFields {}

export type EngramGenObjectNames = "Post" | "Query";

export type EngramGenInputNames = never;

export type EngramGenEnumNames = never;

export type EngramGenInterfaceNames = never;

export type EngramGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type EngramGenUnionNames = never;

export interface EngramGenTypes {
  context: any;
  inputTypes: EngramGenInputs;
  rootTypes: EngramGenRootTypes;
  argTypes: EngramGenArgTypes;
  fieldTypes: EngramGenFieldTypes;
  allTypes: EngramGenAllTypes;
  inheritedFields: EngramGenInheritedFields;
  objectNames: EngramGenObjectNames;
  inputNames: EngramGenInputNames;
  enumNames: EngramGenEnumNames;
  interfaceNames: EngramGenInterfaceNames;
  scalarNames: EngramGenScalarNames;
  unionNames: EngramGenUnionNames;
  allInputTypes: EngramGenTypes['inputNames'] | EngramGenTypes['enumNames'] | EngramGenTypes['scalarNames'];
  allOutputTypes: EngramGenTypes['objectNames'] | EngramGenTypes['enumNames'] | EngramGenTypes['unionNames'] | EngramGenTypes['interfaceNames'] | EngramGenTypes['scalarNames'];
  allNamedTypes: EngramGenTypes['allInputTypes'] | EngramGenTypes['allOutputTypes']
  abstractTypes: EngramGenTypes['interfaceNames'] | EngramGenTypes['unionNames'];
  abstractResolveReturn: EngramGenAbstractResolveReturnTypes;
}


declare global {
  interface EngramGenPluginTypeConfig<TypeName extends string> {
  }
  interface EngramGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface EngramGenPluginSchemaConfig {
  }
}