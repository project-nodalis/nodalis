import { GraphQLFieldResolver } from 'graphql';
import { AbstractTypeResolver, AllInputTypes, FieldResolver, GetGen, GetGen3, HasGen3, NeedsResolver } from '../typegenTypeHelpers';
import { ArgsRecord } from './args';
import { AllEngramInputTypeDefs, AllEngramOutputTypeDefs } from './wrapping';
import { BaseScalars } from './_types';
export interface CommonFieldConfig {
    /**
     * Whether the field can be null
     * @default (depends on whether nullability is configured in type or schema)
     */
    nullable?: boolean;
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
     * Whether the field is list of values, or just a single value.
     *
     * If list is true, we assume the field is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the field is required (non-null).
     *
     * @see TODO: Examples
     */
    list?: true | boolean[];
}
export declare type CommonOutputFieldConfig<TypeName extends string, FieldName extends string> = CommonFieldConfig & {
    /**
     * Arguments for the field
     */
    args?: ArgsRecord;
} & EngramGenPluginFieldConfig<TypeName, FieldName>;
export interface OutputScalarConfig<TypeName extends string, FieldName extends string> extends CommonOutputFieldConfig<TypeName, FieldName> {
    /**
     * Resolve method for the field
     */
    resolve?: FieldResolver<TypeName, FieldName>;
}
export interface EngramOutputFieldConfig<TypeName extends string, FieldName extends string> extends OutputScalarConfig<TypeName, FieldName> {
    type: GetGen<'allOutputTypes', string> | AllEngramOutputTypeDefs;
}
export declare type EngramOutputFieldDef = EngramOutputFieldConfig<string, any> & {
    name: string;
    subscribe?: GraphQLFieldResolver<any, any>;
};
/**
 * Ensure type-safety by checking
 */
export declare type ScalarOutSpread<TypeName extends string, FieldName extends string> = NeedsResolver<TypeName, FieldName> extends true ? HasGen3<'argTypes', TypeName, FieldName> extends true ? [ScalarOutConfig<TypeName, FieldName>] : [ScalarOutConfig<TypeName, FieldName>] | [FieldResolver<TypeName, FieldName>] : HasGen3<'argTypes', TypeName, FieldName> extends true ? [ScalarOutConfig<TypeName, FieldName>] : [] | [FieldResolver<TypeName, FieldName>] | [ScalarOutConfig<TypeName, FieldName>];
export declare type ScalarOutConfig<TypeName extends string, FieldName extends string> = NeedsResolver<TypeName, FieldName> extends true ? OutputScalarConfig<TypeName, FieldName> & {
    resolve: FieldResolver<TypeName, FieldName>;
} : OutputScalarConfig<TypeName, FieldName>;
export declare type FieldOutConfig<TypeName extends string, FieldName extends string> = NeedsResolver<TypeName, FieldName> extends true ? EngramOutputFieldConfig<TypeName, FieldName> & {
    resolve: FieldResolver<TypeName, FieldName>;
} : EngramOutputFieldConfig<TypeName, FieldName>;
export interface OutputDefinitionBuilder {
    typeName: string;
    addField(config: EngramOutputFieldDef): void;
    addDynamicOutputMembers(block: OutputDefinitionBlock<any>, isList: boolean): void;
    warn(msg: string): void;
}
export interface InputDefinitionBuilder {
    typeName: string;
    addField(config: EngramInputFieldDef): void;
    addDynamicInputFields(block: InputDefinitionBlock<any>, isList: boolean): void;
    warn(msg: string): void;
}
export interface OutputDefinitionBlock<TypeName extends string> extends EngramGenCustomOutputMethods<TypeName>, EngramGenCustomOutputProperties<TypeName> {
}
/**
 * The output definition block is passed to the "definition"
 * argument of the
 */
export declare class OutputDefinitionBlock<TypeName extends string> {
    protected typeBuilder: OutputDefinitionBuilder;
    protected isList: boolean;
    readonly typeName: string;
    constructor(typeBuilder: OutputDefinitionBuilder, isList?: boolean);
    get list(): OutputDefinitionBlock<TypeName>;
    string<FieldName extends string>(fieldName: FieldName, ...opts: ScalarOutSpread<TypeName, FieldName>): void;
    int<FieldName extends string>(fieldName: FieldName, ...opts: ScalarOutSpread<TypeName, FieldName>): void;
    boolean<FieldName extends string>(fieldName: FieldName, ...opts: ScalarOutSpread<TypeName, FieldName>): void;
    id<FieldName extends string>(fieldName: FieldName, ...opts: ScalarOutSpread<TypeName, FieldName>): void;
    float<FieldName extends string>(fieldName: FieldName, ...opts: ScalarOutSpread<TypeName, FieldName>): void;
    field<FieldName extends string>(name: FieldName, fieldConfig: FieldOutConfig<TypeName, FieldName>): void;
    protected addScalarField(fieldName: string, typeName: BaseScalars, opts: [] | ScalarOutSpread<TypeName, any>): void;
    protected decorateField(config: EngramOutputFieldDef): EngramOutputFieldDef;
}
export interface ScalarInputFieldConfig<T> extends CommonFieldConfig {
    /**
     * Whether the field is required (non-nullable)
     * @default
     */
    required?: boolean;
    /**
     * The default value for the field, if any
     */
    default?: T;
}
export interface EngramInputFieldConfig<TypeName extends string, FieldName extends string> extends ScalarInputFieldConfig<GetGen3<'inputTypes', TypeName, FieldName>> {
    type: AllInputTypes | AllEngramInputTypeDefs<string>;
}
export declare type EngramInputFieldDef = EngramInputFieldConfig<string, string> & {
    name: string;
};
export declare class InputDefinitionBlock<TypeName extends string> {
    protected typeBuilder: InputDefinitionBuilder;
    protected isList: boolean;
    readonly typeName: string;
    constructor(typeBuilder: InputDefinitionBuilder, isList?: boolean);
    get list(): InputDefinitionBlock<TypeName>;
    string(fieldName: string, opts?: ScalarInputFieldConfig<string>): void;
    int(fieldName: string, opts?: ScalarInputFieldConfig<number>): void;
    boolean(fieldName: string, opts?: ScalarInputFieldConfig<boolean>): void;
    id(fieldName: string, opts?: ScalarInputFieldConfig<string>): void;
    float(fieldName: string, opts?: ScalarInputFieldConfig<number>): void;
    field<FieldName extends string>(fieldName: FieldName, fieldConfig: EngramInputFieldConfig<TypeName, FieldName>): void;
    protected addScalarField(fieldName: string, typeName: BaseScalars, opts?: ScalarInputFieldConfig<any>): void;
    protected decorateField(config: EngramInputFieldDef): EngramInputFieldDef;
}
export interface AbstractOutputDefinitionBuilder<TypeName extends string> extends OutputDefinitionBuilder {
    setResolveType(fn: AbstractTypeResolver<TypeName>): void;
}
