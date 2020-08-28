import { AbstractTypeResolver, GetGen } from '../typegenTypeHelpers';
import { EngramObjectTypeDef } from './objectType';
import { RootTypingDef } from './_types';
export interface UnionDefinitionBuilder<TypeName extends string> {
    setResolveType(fn: AbstractTypeResolver<TypeName>): void;
    addUnionMembers(members: UnionMembers): void;
}
export declare type UnionMembers = Array<GetGen<'objectNames'> | EngramObjectTypeDef<any>>;
export declare class UnionDefinitionBlock<TypeName extends string> {
    protected typeBuilder: UnionDefinitionBuilder<TypeName>;
    constructor(typeBuilder: UnionDefinitionBuilder<TypeName>);
    /**
     * All ObjectType names that should be part of the union, either
     * as string names or as references to the `objectType()` return value
     */
    members(...unionMembers: UnionMembers): void;
    /**
     * Sets the "resolveType" method for the current union
     */
    resolveType(fn: AbstractTypeResolver<TypeName>): void;
}
export interface EngramUnionTypeConfig<TypeName extends string> {
    /**
     * The name of the union type
     */
    name: TypeName;
    /**
     * Builds the definition for the union
     */
    definition(t: UnionDefinitionBlock<TypeName>): void;
    /**
     * The description to annotate the GraphQL SDL
     */
    description?: string | null;
    /**
     * Info about a field deprecation. Formatted as a string and provided with the
     * deprecated directive on field/enum types and as a comment on input fields.
     */
    deprecation?: string;
    /**
     * Root type information for this type
     */
    rootTyping?: RootTypingDef;
}
export declare class EngramUnionTypeDef<TypeName extends string> {
    readonly name: TypeName;
    protected config: EngramUnionTypeConfig<string>;
    constructor(name: TypeName, config: EngramUnionTypeConfig<string>);
    get value(): EngramUnionTypeConfig<string>;
}
/**
 * Defines a new `GraphQLUnionType`
 * @param config
 */
export declare function unionType<TypeName extends string>(config: EngramUnionTypeConfig<TypeName>): EngramUnionTypeDef<TypeName>;
