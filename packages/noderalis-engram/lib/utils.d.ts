import { GraphQLEnumType, GraphQLInputObjectType, GraphQLInterfaceType, GraphQLNamedType, GraphQLObjectType, GraphQLResolveInfo, GraphQLScalarType, GraphQLSchema, GraphQLType, GraphQLUnionType } from 'graphql';
import { MissingType } from './definitions/_types';
import { PluginConfig } from './plugin';
export declare const isInterfaceField: (type: GraphQLObjectType, fieldName: string) => boolean;
/**
 *
 * Copied from graphql-js:
 *
 */
/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */
export declare function suggestionList(input?: string, options?: string[]): string[];
export declare function objValues<T>(obj: Record<string, T>): T[];
export declare function mapObj<T, R>(obj: Record<string, T>, mapper: (val: T, key: string, index: number) => R): R[];
export declare function mapValues<T, R>(obj: Record<string, T>, mapper: (val: T, key: string, index: number) => R): Record<string, any>;
export declare function eachObj<T>(obj: Record<string, T>, iter: (val: T, key: string, index: number) => void): void;
export declare const isObject: (obj: any) => boolean;
export declare const assertAbsolutePath: (pathName: string, property: string) => string;
export interface GroupedTypes {
    input: GraphQLInputObjectType[];
    interface: GraphQLInterfaceType[];
    object: GraphQLObjectType[];
    union: GraphQLUnionType[];
    enum: GraphQLEnumType[];
    scalar: Array<GraphQLScalarType & {
        asEngramMethod?: string;
    }>;
}
export declare function groupTypes(schema: GraphQLSchema): GroupedTypes;
export declare function isUnknownType(type: GraphQLNamedType): boolean;
export declare function firstDefined<T>(...args: Array<T | undefined>): T;
export declare function isPromiseLike(value: any): value is PromiseLike<any>;
export declare function relativePathTo(absolutePath: string, outputPath: string): string;
export interface PrintedGenTypingImportConfig {
    module: string;
    default?: string;
    bindings?: Array<string | [string, string]>;
}
export declare class PrintedGenTypingImport {
    readonly config: PrintedGenTypingImportConfig;
    constructor(config: PrintedGenTypingImportConfig);
}
export declare function printedGenTypingImport(config: PrintedGenTypingImportConfig): PrintedGenTypingImport;
export interface PrintedGenTypingConfig {
    name: string;
    optional: boolean;
    type: string;
    description?: string;
    imports?: PrintedGenTypingImport[];
}
export declare class PrintedGenTyping {
    protected config: PrintedGenTypingConfig;
    constructor(config: PrintedGenTypingConfig);
    get imports(): PrintedGenTypingImport[];
    toString(): string;
}
export declare function printedGenTyping(config: PrintedGenTypingConfig): PrintedGenTyping;
export declare function unwrapType(type: GraphQLType): {
    type: GraphQLNamedType;
    isNonNull: boolean;
    list: boolean[];
};
export declare function assertNoMissingTypes(schema: GraphQLSchema, missingTypes: Record<string, MissingType>): void;
export declare function consoleWarn(msg: string): void;
export declare function log(msg: string): void;
/**
 * Calculate the venn diagram between two iterables based on reference equality
 * checks. The returned tripple contains items thusly:
 *
 *    * items only in arg 1 --> first tripple slot
 *    * items in args 1 & 2 --> second tripple slot
 *    * items only in arg 2 --> third tripple slot
 */
export declare function venn<T>(xs: Iterable<T>, ys: Iterable<T>): [Set<T>, Set<T>, Set<T>];
/**
 * Validate that the data returned from a plugin from the `onInstall` hook is valid.
 */
export declare function validateOnInstallHookResult(pluginName: string, hookResult: ReturnType<Exclude<PluginConfig['onInstall'], undefined>>): void;
export declare const UNKNOWN_TYPE_SCALAR: GraphQLScalarType;
export declare function pathToArray(infoPath: GraphQLResolveInfo['path']): Array<string | number>;
export declare function getOwnPackage(): {
    name: string;
};
/**
 * Use this to make assertion at end of if-else chain that all members of a
 * union have been accounted for.
 */
export declare function casesHandled(x: never): never;
