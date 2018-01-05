declare module "Config/ConfigInterface" {
    export interface ConfigInterface {
        get(): Object;
    }
}
declare module "Di/InjectionAwareInterface" {
    /**
     * Guarantee for dependency injector compatibility
     */
    export interface InjectionAwareInterface {
        set(key: any, value: any): void;
        get(key: any): any;
    }
}
declare module "Di/Container" {
    export class Container {
        private container;
        constructor();
        /**
          * Set value to container
         * @param key
         * @param value
         */
        set(key: string, value: any): void;
        /**
         * Get value from container
         * @param key
         */
        get(key: string): void;
    }
}
declare module "Di/DependencyInjectorInterface" {
    import { InjectionAwareInterface } from "Di/InjectionAwareInterface";
    export interface DependencyInjectorInterface {
        getDi(): Object;
        setDi(di: InjectionAwareInterface): any;
    }
}
declare module "Di/Di" {
    /**
     * Dependency injector
     */
    export class Di {
        /**
         * Dependency injector container
         */
        private static di;
        /**
         * Inject value to dependency injector
         * @param  String key
         * @param  Any    value
         * @return Void
         */
        static set(key: string, value: any): void;
        /**
         * Get value from dependency injector
         * @param  String key
         * @return Any
         */
        static get(key: string): any;
    }
}
declare module "Di/Service" {
    import { InjectionAwareInterface } from "Di/InjectionAwareInterface";
    /**
     * Wrapper to dependency injector class
     */
    export class Service implements InjectionAwareInterface {
        private di;
        /**
         *
         */
        constructor();
        /**
         * Set value to static dependency injector
         * @param key
         * @param value
         */
        set(key: string, value: any): void;
        /**
         * Get value from static dependency injector
         * @param key
         */
        get(key: string): void;
    }
}
declare module "Di/Injectable" {
    import { Service } from "Di/Service";
    export class Injectable {
        /**
         *
         */
        private getValidator(resolveProperties?);
        getDi(): Service;
        /**
         *
         * @param obj
         */
        inject(obj: any, fn?: Function): any;
    }
}
declare module "Di/LocalStorage" {
    /**
     * Wrapper to local storage
     */
    export class LocalStorage {
        constructor();
        /**
         * Set item in local storage
         * @param key string
         * @param value string
         * @returns void
         */
        set(key: string, value: string): void;
        /**
         * Get item from local storage
         * @param key string
         * @returns any
         */
        get(key: string): any;
    }
}
declare module "Di/SessionStorage" {
    /**
     * wrapper to session storage
     */
    export class SessionStorage {
        constructor();
        /**
         * Set item in session storage
         * @param key string
         * @param value string
         * @returns void
         */
        set(key: string, value: string): void;
        /**
         * Get item from session storage
         * @param key string
         * @returns any
         */
        get(key: string): any;
    }
}
declare module "Environment/Scope" {
    export class Scope {
        static LOCAL: number;
        static DEV: number;
        static TEST: number;
        static QA: number;
        static STAGING: number;
        static PRODUCTION: number;
    }
}
declare module "Environment/Config" {
    export class Config {
        /**
         *
         */
        private config;
        /**
         * Set general config and environment
         *
         * @param Object config
         * @param Number env = Scope.Local
         */
        setConfig(config: Object, env?: number): void;
        /**
         * Get config was assigned
         *
         * @param Number env = Garlic.Environment.Scope.Local
         * @return Object
         */
        getConfig(env?: number): Object;
    }
}
declare module "Errors/MessageCode" {
    export class MessageCode {
        static NOT_VALID_ARRAY: number;
        static NOT_VALID_ARRAY_OBJECT: number;
        static NOT_VALID_OBJECT: number;
    }
}
declare module "Errors/Message" {
    export class Message {
        /**
         *
         */
        static NOT_VALID_ARRAY: string;
        /**
         *
         */
        static NOT_VALID_ARRAY_OBJECT: string;
        /**
         *
         */
        static NOT_VALID_OBJECT: string;
        /**
         *
         * @param code
         * @param custom
         */
        static getCodeMessage(code: number, custom: string): string;
    }
}
declare module "Helper/ArrayHelper" {
    export class ArrayHelper {
        constructor();
        static inArray(container: any[], element: any): Boolean;
    }
}
declare module "Helper/MathHelper" {
    export class MathHelper {
        constructor();
        static getRandom(init: any, last: any): number;
        static getUUID(): string;
        static getS4(): string;
    }
}
declare module "Helper/StringHelper" {
    export class StringHelper {
        constructor();
        /**
         * [sanitizeString description]
         * @param  {string} str [description]
         * @return {[type]}     [description]
         */
        static sanitizeString(str: string): string;
        /**
         * [capitalize description]
         * @param  {[type]} str [description]
         * @return {[type]}     [description]
         */
        static capitalize(str: any): any;
    }
}
declare module "Helper/Uuid" {
    export class Uuid {
        constructor();
        static get(): string;
    }
}
declare module "Helper/Validator" {
    export class Validator {
        static validStructArray(data: any[]): boolean;
    }
}
declare module "Loader/Loader" {
    import { InjectionAwareInterface } from "Di/InjectionAwareInterface";
    export interface DiConstructorInjection {
        initialize(di: InjectionAwareInterface): any;
    }
}
declare module "Mvc/Controller" {
    import { Service } from "Di/Service";
    export class Controller {
        private di;
        private viewModel;
        /**
         *
         */
        constructor(resolveProperties?: Function);
        /**
         *
         */
        initialize(): void;
        /**
         *
         * @param key
         * @param viewModel
         */
        setViewModel(viewModel: any): void;
        /**
         *
         * @param key
         */
        getViewModel(): {};
        /**
         *
         */
        getDi(): Service;
        /**
         *
         * @param di
         */
        setDi(di: any): void;
    }
}
declare function View(obj: any): (target: any, key: string, descriptor: any) => any;
declare module "Mvc/Builder/Transaction" {
    export class Transaction {
        constructor();
        get(row: any): void;
    }
}
declare module "Mvc/Builder/And" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class And extends Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare module "Mvc/Builder/ComparisonOperators" {
    export class ComparisonOperators {
        static AND: string;
        static OR: string;
        static EQUAL: string;
        static DIFFERENT: string;
    }
}
declare module "Mvc/Builder/DataType" {
    export class DataType {
        static BOOLEAN: number;
        static INTEGER: number;
        static STRING: number;
        static OBJECT: number;
        static ARRAY: number;
        static CLASS: number;
        static BOOLEAN_TYPE: string;
        static INTEGER_TYPE: string;
        static STRING_TYPE: string;
        static OBJECT_TYPE: string;
        /**
         *
         */
        static getValueByType(value: any): any;
    }
}
declare module "Mvc/Builder/Group" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class Group extends Transaction {
        constructor();
        get(): void;
    }
}
declare module "Mvc/Builder/Gt" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class Gt extends Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare module "Mvc/Builder/Gte" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class Gte extends Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare module "Mvc/Builder/In" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class In extends Transaction {
        /**
         *
         */
        private conditions;
        /**
         *
         * @param condition
         */
        constructor(condition: Object);
        get(): string;
    }
}
declare module "Mvc/Builder/Like" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class Like extends Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare module "Mvc/Builder/Lt" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class Lt extends Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare module "Mvc/Builder/Lte" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class Lte extends Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare module "Mvc/Builder/Not" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class Not extends Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare module "Mvc/Builder/NotIn" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class NotIn extends Transaction {
        /**
         *
         */
        private conditions;
        /**
         *
         * @param condition
         */
        constructor(condition: Object);
        get(): string;
    }
}
declare module "Mvc/Builder/Operators" {
    export class Operators {
        static OR: string;
        static AND: string;
        static SORT: string;
        static IS_NOT: string;
        static LIMIT: string;
        static COLUMNS: string;
        static CONDITIONAL: string;
    }
}
declare module "Mvc/Builder/Or" {
    import { Transaction } from "Mvc/Builder/Transaction";
    export class Or extends Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare module "Mvc/Builder/Sort" {
    export class Sort {
        static ASC: number;
        static DESC: number;
        static sortByField(data: any, field: any): any[];
    }
}
declare module "Mvc/Builder/Query" {
    export class Query {
        private lim;
        private sort;
        private data;
        private cols;
        private conds;
        private sortConds;
        private transactions;
        private negativeConds;
        private negativeTransactions;
        /**
         *
         * @param data
         */
        constructor(data?: any);
        /**
         *
         */
        columns(cols: any): this;
        /**
         *
         */
        getColumns(): string[];
        /**
         *
         * @param row
         */
        private resolveColumns(row);
        /**
         *
         * @param condClass
         */
        where(conditions: any): this;
        limit(limit: any): this;
        private addOperator(length, operator);
        /**
         *
         * @param conditions
         */
        orderBy(sortContent: Object): void;
        /**
         *
         */
        private resolveSort(results);
        /**
         *
         * @param row
         */
        private miniChecksum(row);
        /**
         *
         * @param result
         * @param row
         */
        private ifExistOnResult(result, row);
        /**
         *
         */
        get(): any[];
    }
}
declare module "Mvc/Components/Component" {
    import { Controller } from "Mvc/Controller";
    export class Component extends Controller {
        constructor(context?: Controller | any);
    }
}
declare module "Mvc/Model/RawModel" {
    export class RawModel {
        state: number;
        identify: string;
        /**
         *
         */
        initialize(): void;
        /**
         *
         */
        beforeInsert(): void;
        /**
         *
         */
        beforeFind(): void;
        /**
         *
         */
        beforeUpdate(): void;
        /**
         *
         */
        beforeDelete(): void;
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        getClassName(): string;
        /**
         *
         */
        getIdentify(): string;
    }
}
declare module "Mvc/Model/ModelInterface" {
    export interface ModelInterface {
        insertUrl: string;
        deleteUrl: string;
        updateUrl: string;
        findUrl: string;
        state: number;
        internalId: string;
        setSource(source: Object): void;
        setFindUrl(url: string): void;
        setInsertUrl(url: string): void;
        setUpdateUrl(url: string): void;
        setDeleteUrl(url: string): void;
        getFindUrl(): string;
        getInsertUrl(): string;
        getUpdateUrl(): string;
        getDeleteUrl(): string;
    }
}
declare module "Mvc/Model/AjaxModel" {
    import { RawModel } from "Mvc/Model/RawModel";
    import { ModelInterface } from "Mvc/Model/ModelInterface";
    export class AjaxModel extends RawModel implements ModelInterface {
        source: string;
        insertUrl: string;
        deleteUrl: string;
        updateUrl: string;
        findUrl: string;
        findOneUrl: string;
        countUrl: string;
        params: Object;
        internalId: string;
        method: string;
        constructor();
        setSource(data: any): void;
        setInsertUrl(url: string): void;
        setFindUrl(url: string): void;
        setFindOneUrl(url: string): void;
        setCountUrl(url: string): void;
        setDeleteUrl(url: string): void;
        setUpdateUrl(url: string): void;
        getInsertUrl(): string;
        getFindUrl(): string;
        getDeleteUrl(): string;
        getUpdateUrl(): string;
        setParams(params: Object): void;
        getParams(): Object;
        setMethod(method: string): void;
        getMethod(): string;
    }
}
declare module "Mvc/Model/StaticModel" {
    import { RawModel } from "Mvc/Model/RawModel";
    export class StaticModel extends RawModel {
        private index;
        private storage;
        di: any;
        /**
         *
         */
        constructor(di: any);
        /**
         *
         */
        setData(data: any): void;
        /**
         *
         */
        getData(): string;
        /**
         *
         */
        getObjectData(): any;
        /**
         *
         */
        setIndex(index: any): void;
        /**
         *
         */
        getIndex(): number;
    }
}
declare module "Mvc/Model/AjaxModelPersistent" {
    import { StaticModel } from "Mvc/Model/StaticModel";
    export class AjaxModelPersistent extends StaticModel {
        private container;
        source: string;
        insertUrl: string;
        deleteUrl: string;
        updateUrl: string;
        findUrl: string;
        params: Object;
        internalId: string;
        method: string;
        setSource(data: any): void;
        setAjaxInit(value: any): void;
        getAjaxInit(): boolean;
        setInsertUrl(url: string): void;
        setFindUrl(url: string): void;
        setDeleteUrl(url: string): void;
        setUpdateUrl(url: string): void;
        getInsertUrl(): string;
        getFindUrl(): string;
        getDeleteUrl(): string;
        getUpdateUrl(): string;
        setParams(params: Object): void;
        getParams(): Object;
        setMethod(method: string): void;
        getMethod(): string;
    }
}
declare module "Mvc/Model/Deny" {
    export class Deny {
        /**
         * Get deny methods
         */
        static getDeny(): string[];
    }
}
declare module "Mvc/View/Dom/ElementInterface" {
    export interface ElementInterface {
        setElement(element: any): Object;
        getElement(): Object;
    }
}
declare module "Mvc/View/Dom/CssManager" {
    import { ElementInterface } from "Mvc/View/Dom/ElementInterface";
    export class CssManager implements ElementInterface {
        /**
         *
         */
        private element;
        /**
         *
         * @param element
         */
        constructor();
        /**
         *
         * @param element
         */
        setElement(element: any): this;
        /**
         *
         */
        getElement(): any;
        /**
         * Handle style through javascript
         *
         * @param  String key, css propertie
         * @param String|Object value
         * @return this
         */
        css(key: any, value?: any): any;
        /**
         * Handle style through javascript
         *
         * @param  String key, css propertie
         * @param String|Object value
         * @return this
         */
        setStyle(key: any, value?: any): any;
        /**
         * Set class attribute
         *
         * @param  String attrClass
         * @return this
         */
        class(attrClass: string): this;
        /**
         * Set new class but deletes previous classes added
         *
         * @param String attrClass
         */
        setClass(attrClass: string): this;
        /**
         * Concat class to element
         *
         * @param  String attrClass
         * @return
         */
        addClass(attrClass: string): this;
        /**
         * Set childs as append does
         *
         * @return Object this
         */
        addChild(element: any): this;
        /**
         *
         */
        show(): this;
        /**
         *
         */
        hide(): this;
    }
}
declare module "Mvc/View/Dom/EventManager" {
    export class EventManager {
        /**
         *
         */
        private element;
        /**
         *
         * @param element
         */
        constructor();
        private setEventToElement(eventName, fn);
        /**
         *
         * @param  {Function} fn [description]
         * @return {[type]}      [description]
         */
        click(fn: any): this;
        /**
         *
         */
        doubleClick(fn: any): this;
        /**
         *
         * @return {[type]} [description]
         */
        change(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keypress(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keydown(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keyup(fn: any): this;
        paste(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        blur(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        focus(fn: any): this;
        /**
         *
         * @param fn
         */
        submit(fn: any): this;
    }
}
declare module "Mvc/View/Elements/I" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class I extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/A" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     *
     */
    export class A extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
        /**
         * [favIcon description]
         * @return {[type]} [description]
         */
        favIcon(favIcon: any): this;
        /**
         * [href description]
         * @param  {[type]} href [description]
         * @return {[type]}      [description]
         */
        href(href: any): this;
    }
}
declare module "Mvc/View/Elements/Abbr" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    export class Abbr extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Address" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    export class Address extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Area" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    export class Area extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Article" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Article extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Aside" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Aside extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/B" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class B extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Base" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Base extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Bdi" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Bdi extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Bdo" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Bdo extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Blockquote" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Blockquote extends HtmlElement {
        /**
         *
         */
        constructor(args?: {});
    }
}
declare module "Mvc/View/Elements/Body" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Body extends HtmlElement {
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Br" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Br extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Button" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     *
     */
    export class Button extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
        /**
         *
         * @param
         * @return
         */
        type(type: any): this;
        /**
         *
         * @return
         */
        favIcon(favIcon: any): this;
        /**
         *
         * @return
         */
        success(): this;
        /**
         *
         * @return
         */
        notice(): this;
        /**
         *
         * @return
         */
        default(): this;
        /**
         *
         * @return
         */
        primary(): this;
        /**
         * [warning description]
         * @return {[type]} [description]
         */
        warning(): this;
        /**
         * [danger description]
         * @return {[type]} [description]
         */
        danger(): this;
    }
}
declare module "Mvc/View/Elements/Canvas" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Canvas extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Caption" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Caption extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Cite" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Cite extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Code" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Code extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Col" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Col extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/ColGroup" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class ColGroup extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Datalist" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Datalist extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Db" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Db extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Del" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Del extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Details" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Details extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Dfn" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Dfn extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Dialog" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Dialog extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Div" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Div extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Dl" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Dl extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Dt" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Dt extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Em" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Em extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Embed" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Embed extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Fieldset" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Fieldset extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Figcaption" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Figcaption extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Figure" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Figure extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Footer" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Footer extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Form" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     *
     * @type
     */
    export class Form extends HtmlElement {
        /**
         *
         */
        private invalidElements;
        /**
         *
         */
        constructor(args?: any);
        /**
         * @param {Function} fn
         */
        submit(fn: Function): void;
        /**
         *
         */
        getInvalidElements(): any[];
        /**
         *
         */
        validate(fn: Function): boolean;
        /**
         *
         */
        getFormElements(): any[];
        /**
         *
         */
        setAutoComplete(data: Boolean): this;
        /**
         *
         */
        getAutoComplete(): any;
    }
}
declare module "Mvc/View/Elements/H1" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H1 extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/H2" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H2 extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/H3" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H3 extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/H4" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H4 extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/H5" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H5 extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/H6" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H6 extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Head" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Head extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Header" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Header extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Iframe" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Iframe extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Img" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Img extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
        width(width: any): this;
        height(height: any): this;
        src(src: any): this;
    }
}
declare module "Mvc/View/Elements/forms/FormTag" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    export class FormTag extends HtmlElement {
        /**
         * Set form element property readonly
         * @param {Boolean} readOnly
         */
        setReadOnly(readOnly: Boolean): this;
        /**
         * Get form read only
         */
        getReadOnly(): any;
        /**
         * Set disabled
         * @param {Boolean} disabled
         */
        setDisabled(disabled: Boolean): this;
        getDisabled(): any;
        setSize(size: string | number): this;
        getSize(): any;
        setMaxLength(max: any): this;
        getMaxLength(): any;
        setAutoFocus(data: Boolean): this;
        getAutoFocus(): any;
        setMin(min: number): this;
        getMin(): number;
        setMax(max: number): this;
        getMax(): number;
        /**
         *
         */
        setAlt(alt: string): this;
        /**
         *
         */
        getAlt(): any;
        /**
         *
         */
        setPlaceholder(placeholder: string): this;
        /**
         *
         */
        getPlaceholder(): any;
        /**
         *
         */
        setTitle(title: string): this;
        /**
         *
         */
        getTitle(): any;
        /**
         *
         */
        setPattern(pattern: string | number): this;
        /**
         *
         */
        getPattern(): any;
        /**
         *
         */
        setName(name: string): this;
        /**
         *
         */
        getName(): any;
        /**
         *
         */
        setStep(num: number): this;
        /**
         *
         */
        getStep(): any;
        /**
         *
         */
        validate(fn?: Function | Boolean): boolean;
        isChecked(): any;
        check(): this;
        unCheck(): this;
    }
}
declare module "Mvc/View/Elements/Input" {
    import { FormTag } from "Mvc/View/Elements/forms/FormTag";
    /**
     *
     * @type
     */
    export class Input extends FormTag {
        static NUMBERS: number;
        static TEXT: number;
        static NO_SPECIAL_CHARACTERS: number;
        static TEXT_NO_SPECIAL_CHARACTERS: number;
        static NUMBERS_NO_SPECIAL_CHARACTERS: number;
        /**
         *
         */
        constructor(args?: any);
        /**
         * [type description]
         * @param  {[type]} type [description]
         * @return {[type]}      [description]
         */
        type(type: any): this;
        /**
         *
         */
        setText(): this;
        /**
         *
         */
        setHidden(): this;
        /**
         *
         */
        setNumber(): this;
        /**
         *
         */
        setDate(): this;
        /**
         *
         */
        setFile(): this;
    }
}
declare module "Mvc/View/Elements/Ins" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Ins extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Kbd" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Kbd extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Keygen" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Keygen extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Label" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Label extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Leyend" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Leyend extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Li" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Li extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Link" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Link extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Main" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Main extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Menu" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Menu extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Menuitem" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Menuitem extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Meta" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Meta extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Meter" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Meter extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Nav" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Nav extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Noscrip" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Noscrip extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Obj" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Obj extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Ol" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Ol extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Optgroup" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Optgroup extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/P" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class P extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Param" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Param extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Pre" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Pre extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Progress" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Progress extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Q" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Q extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Rp" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Rp extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Rt" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Rt extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Ruby" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Ruby extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/S" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class S extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Samp" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Samp extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Script" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Script extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Section" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Section extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Option" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     *
     * @type
     */
    export class Option extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
        setValue(val: any): this;
        /**
         *
         */
        getValue(): any;
        /**
         *
         */
        setContent(content: any): this;
        /**
         *
         */
        getContent(): any;
    }
}
declare module "Mvc/View/Elements/Select" {
    import { Option } from "Mvc/View/Elements/Option";
    import { FormTag } from "Mvc/View/Elements/forms/FormTag";
    export class Select extends FormTag {
        private choose;
        /**
         *
         */
        constructor(args?: any);
        /**
         *
         */
        getSelected(): Option;
        /**
         *
         * @param fn
         */
        iterate(fn: any): this;
        /**
         *
         */
        setChoose(choose: any): void;
        /**
         *
         */
        select(value: any): void;
        /**
         *
         * @param  content
         * @return
         */
        build(content: any, fields: any): this;
    }
}
declare module "Mvc/View/Elements/Small" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Small extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Source" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Source extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Span" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Span extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Strong" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Strong extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Style" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Style extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Sub" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Sub extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Summary" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Summary extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Sup" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Sup extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Td" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Td extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
        /**
         *
         * @param  {[type]} num [description]
         * @return {[type]}     [description]
         */
        colspan(cols: any): this;
        /** no pedi las hamburguesas soy un mk acompalene a comprar
     * @param  {[type]} row [description]
     * @return {[type]}     [description]
     */
        rowspan(rows: any): this;
    }
}
declare module "Mvc/View/Elements/Thead" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Thead extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Tbody" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Tbody extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Tfoot" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Tfoot extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Tr" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Tr extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Table" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [Table description]
     * @type {[type]}
     */
    export class Table extends HtmlElement {
        private tblElements;
        private thead;
        private tbody;
        private tfoot;
        private tr;
        private th;
        private td;
        private system;
        private header;
        private fnCHeader;
        private fnCContent;
        /**
         *
         */
        constructor(args?: any);
        /**
         *
         */
        getThead(): any;
        /**
         *
         */
        getTbody(): any;
        /**
         *
         */
        toHead(component: any): this;
        /**
         *
         */
        toHeadTr(component: any): this;
        /**
         *
         */
        toBody(component: any): this;
        /**
         *
         */
        toFoot(component: any): this;
        /**
         *
         */
        toBodyTr(component: any): this;
        /**
         *
         */
        toFootTr(component: any): this;
    }
}
declare module "Mvc/View/Elements/Textarea" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Textarea extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Th" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Th extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
        colspan(cols: any): this;
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        rowspan(rows: any): this;
    }
}
declare module "Mvc/View/Elements/Time" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Time extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Title" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Title extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Track" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Track extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/U" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class U extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Ul" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Ul extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Var" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Var extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Video" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Video extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Wbr" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Wbr extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Adapter/ElementAdapter" {
    export class ElementAdapter {
        /**
         *
         */
        private element;
        /**
         *
         * @param element
         * @param tagName
         */
        constructor(element: any);
        /**
         *
         * @param element
         */
        setElement(element: any): this;
        /**
         *
         */
        get(): any;
    }
}
declare module "Mvc/View/Dom/ParentManager" {
    import { ElementInterface } from "Mvc/View/Dom/ElementInterface";
    export class ParentManager implements ElementInterface {
        private element;
        constructor();
        getParent(): any;
        getSiblings(): false | any[];
        getChilds(): any[];
        /**
         *
         */
        setElement(element: any): this;
        /**
         *
         */
        getElement(): any;
    }
}
declare module "Mvc/View/Dom/ElementManager" {
    /**
     *
     */
    export class ElementManager {
        private element;
        /**
         *
         * @param element
         */
        constructor();
        /**
         *
         * @param element
         */
        setElement(element: any): void;
        /**
         * Get document element
         * @return {document} element
         */
        getElement(): any;
        /**
         *
         * @return
         */
        getClassName(): string;
        /**
         * Set id attribute
         * @param {String} id
         * @return this
         */
        setId(id: string): this;
        /**
         * Get id attribute
         * @return {String}
         */
        getId(): any;
        /**
         * Set required attribute
         * å
         */
        setRequired(req: any): this;
        /**
         * Get required attribute
         * @return {Boolean}
         */
        getRequired(): any;
        /**
         *
         * @param append
         */
        checkAppendValue(append: any): void;
        /**
         *
         * @param append
         * @param type
         */
        verifyElement(append: any, type?: string): void;
        /**
         *
         * @param append
         */
        append(append: any): this;
        /**
         * Set class
         * @param  { String } attrClass
         * @return this
         */
        class(attrClass: string): this;
        /**
         *
         * @param  { String } cssClass
         * @return
         */
        addClass(attrClass: string): this;
        /**
         *
         * @param  { String } attribute
         * @return { this | attribute}
         */
        attr(attr: any, value?: any): any;
        /**
         *
         * @param {String} attribute
         */
        removeAttr(attr: string): this;
        /**
         *
         * @param
         * @return
         */
        html(html?: any): any;
        /**
         *
         * @param html
         */
        setHtml(html?: any): any;
        /**
         *
         */
        private removeChildNodes();
        /**
         *
         */
        private removeChilds(element, childs);
        /**
         *
         * @param  {any = null}        val [description]
         * @return {[type]}   [description]
         */
        val(val?: any): any;
        /**
         *
         * @param  {any = null}        val [description]
         * @return {[type]}   [description]
         */
        getValue(val?: any): any;
        /**
         *
         */
        valAsInt(): number;
        /**
         *
         * @param  {any = null}        text [description]
         * @return {[type]}   [description]
         */
        text(text?: any): any;
        /**
         *
         */
        empty(): this;
        /**
         *
         * @param element
         */
        remove(element?: boolean): void;
        /**
         *
         */
        getAsObject(): any[];
        /**
         *
         */
        getAsJson(): string;
    }
}
declare module "Mvc/View/Wrappers/HtmlElement" {
    import { ElementInterface } from "Mvc/View/Dom/ElementInterface";
    import { DependencyInjectorInterface } from "Di/DependencyInjectorInterface";
    export class HtmlElement implements DependencyInjectorInterface, ElementInterface {
        [x: string]: any;
        protected viewModelData: any;
        private CSS_MANAGER;
        private PARENT_MANAGER;
        private ELEMENT_MANAGER;
        /**
         *
         */
        private element;
        /**
         *
         */
        private di;
        /**
         *
         * @param tagName
         */
        constructor();
        initialize(args?: any): void;
        /**
         *
         * @param viewModel
         */
        set(data: any): void;
        /**
         *
         */
        get(key: any): any;
        /**
         *
         */
        setElement(element: any): this;
        /**
         *
         */
        getElement(): any;
        /**
         *
         */
        private getCss();
        /**
         *
         */
        private getElementManager();
        /**
         *
         */
        private getParentManager();
        private getEventManager();
        /**
         *
         * @param tagName
         */
        create(tagName: string): this;
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        getClassName(): string;
        /**
         *
         */
        getChecksum(): string;
        /**
         *
         */
        getValidator(): Object;
        /**
         *
         * @param di
         */
        setDi(di: any): this;
        /**
         *
         */
        getDi(): any;
    }
}
declare module "Mvc/View/ViewModel" {
    export class ViewModel {
        private views;
        private data;
        /**
         *
         * @param data
         */
        constructor();
        /**
         *
         * @param elements
         */
        private resolveViews();
        /**
         *
         */
        private initializeViews(view);
        set(data: any): void;
        setElements(views: any): void;
        getElements(): any;
        get(key: any): any;
    }
}
declare module "Mvc/View/Dom/DomManager" {
    import { ElementInterface } from "Mvc/View/Dom/ElementInterface";
    export class DomManager implements ElementInterface {
        /**
         *
         */
        private element;
        /**
         *
         * @param element
         */
        constructor();
        /**
         *
         * @param id
         */
        getById(id: string, context?: any): any;
        /**
         *
         */
        getByTag(name: string): any;
        /**
         *
         */
        getByClass(name: string, context?: any): any;
        /**
         *
         */
        getByName(name: string, context?: any): any;
        /**
         *
         */
        setElement(element: any): this;
        /**
         *
         */
        getElement(): any;
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        getClassName(): string;
    }
}
declare module "Mvc/View/Elements/Audio" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Audio extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Hidden" {
}
declare module "Mvc/View/Elements/Hr" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Hr extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Map" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Map extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Mvc/View/Elements/Output" {
    import { HtmlElement } from "Mvc/View/Wrappers/HtmlElement";
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Output extends HtmlElement {
        /**
         *
         */
        constructor(args?: any);
    }
}
declare module "Network/Ajax" {
    export class Ajax {
        private httpRequest;
        private context;
        private method;
        private parameters;
        private error;
        private url;
        private container;
        responseFn: Function;
        bfSendFn: Function;
        /**
         *
         */
        constructor();
        /**
         *
         */
        setContext(ctx: Object): void;
        /**
         *
         */
        getContext(): Object;
        /**
         *
         */
        setUrl(url: any): this;
        /**
         *
         */
        getUrl(): string;
        /**
         *
         */
        set(key: any, value: any): void;
        /**
         *
         */
        get(key: any): any;
        /**
         *
         */
        setParams(params: any, value?: any): this;
        /**
         *
         */
        POST(): this;
        /**
         *
         */
        PUT(): this;
        /**
         *
         */
        DELETE(): this;
        /**
         *
         */
        GET(): this;
        /**
         *
         */
        setMethod(method: string): this;
        addContext(): void;
        /**
         *
         */
        response(responseFunction: Function): this;
        /**
         *
         */
        beforeSend(fn: Function): void;
        /**
         *
         */
        private setHeaders();
        /**
         *
         */
        getError(errorFunction: any): void;
        clear(): void;
        /**
         *
         */
        send(fn?: any): void;
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        getClassName(): string;
    }
}
declare module "Network/MethodType" {
    export class MethodType {
        static POST: string;
        static GET: string;
        static PUT: string;
        static DELETE: string;
    }
}
declare namespace Lexer {
}
declare namespace Tokenizer {
}
declare module "Persistence/ComparisonOperators" {
    export class ComparisonOperators {
        static AND: string;
        static OR: string;
        static EQUAL: string;
        static DIFFERENT: string;
    }
}
declare module "Persistence/DataType" {
    export class DataType {
        static BOOLEAN: number;
        static INTEGER: number;
        static STRING: number;
        static OBJECT: number;
        static ARRAY: number;
        static CLASS: number;
        static BOOLEAN_TYPE: string;
        static INTEGER_TYPE: string;
        static STRING_TYPE: string;
        static OBJECT_TYPE: string;
        /**
         *
         */
        static getValueByType(value: any): any;
    }
}
declare module "Persistence/DatamapperOperators" {
    export class DatamapperOperators {
        static OR: string;
        static AND: string;
        static SORT: string;
        static IS_NOT: string;
        static LIMIT: string;
        static COLUMNS: string;
        static CONDITIONAL: string;
    }
}
declare module "Persistence/Sort" {
    export class Sort {
        static ASC: number;
        static DESC: number;
        static sortByField(data: any, field: any): any[];
    }
}
declare module "Persistence/Filter" {
    export class Filter {
        private params;
        private first;
        private final;
        private init;
        private sort;
        private limit;
        private columns;
        constructor();
        buildCondition(params: any): void;
        getSort(sortContent: any): void;
        getLimit(limit: any): void;
        getExpression(key: any, content: any, operator: any, index: any, length: any, comparison?: string): void;
        /**
         *
         */
        getColumns(row: any): Object;
        /**
         *
         */
        getMultipleRowValues(rsp: any, conds?: boolean): any[];
        getOneRowValue(data: any): void;
    }
}
declare module "Reflection/Reflection" {
    export class Reflection {
        private classToReflect;
        private methods;
        private attributes;
        private deny;
        /**
         * Make reflection to objects
         */
        constructor();
        /**
         * Get object class
         * @param Object obj
         */
        getName(obj: Object): string;
        /**
         * Read and get methods and properties
         * @param  Object obj
         * @return String
         */
        read(obj: Object): string;
        /**
         * Return methods and properties as objects
         * @param  Object obj
         * @return Object
         */
        getAtttributeAsObjects(obj: Object): {};
        /**
         * Check if the key is valid
         * @param  String key
         * @return Boolean
         */
        checkDataObject(key: any): boolean;
        /**
         * Get class methods
         * @return Array
         */
        getMethods(): any[];
        /**
         * Get properties or class attributes
         * @return Array
         */
        getAttributes(): any[];
    }
}
declare module "Persistence/UnitOfWork" {
    export class UnitOfWork {
        static NEW: number;
        static CREATED: number;
        static DELETED: number;
        private detached;
        private updated;
        private deleted;
        constructor();
    }
}
declare module "Persistence/Hydrator" {
    export class Hydrator {
        private reflector;
        constructor();
        hydrate(model: any, data: any): any;
    }
}
declare module "Persistence/EntityManager" {
    import { UnitOfWork } from "Persistence/UnitOfWork";
    export class EntityManager {
        uow: UnitOfWork;
        private di;
        private ajax;
        private hydrator;
        private source;
        private model;
        private fnResponse;
        private resultSet;
        private container;
        /**
         * Entity manager is a class
         */
        constructor();
        /**
         *
         */
        private getContainer();
        /**
         *
         * @param model
         * @param params
         */
        find(model: any, params?: Object): this;
        /**
         *
         * @param model
         * @param params
         */
        findOne(model: any, params?: Object): this;
        /**
         *
         * @param model
         * @param params
         */
        count(model: any, params?: Object): this;
        /**
         *
         */
        setWhenIsModel(model: any, params: any, type: any): void;
        private callAjax(objModel, type, params);
        /**
         *
         */
        private ucfirst(str);
        /**
         *
         */
        private lcfirst(str);
        /**
         *
         */
        save(model: any): this;
        /**
         *
         */
        delete(model: any): this;
        /**
         *
         */
        response(fn: Function): this;
        /**
         *
         */
        checkModel(fn: any, type: any, model: any, objModel: any, params: any): void;
        /**
         *
         */
        private setResponseAjax(fn, type, model, objModel, params);
        /**
         *
         */
        setResponseStatic(fn: any, objModel: any, type: any, model: any, params: any): void;
        /**
         *
         */
        private setResponse(data, objModel, type, model, params);
        /**
         *
         */
        private getResultSet(response, params, model, objModel);
        /**
         *
         */
        flush(): boolean;
        /**
         *
         */
        reset(): boolean;
        /**
         *
         */
        group(): {};
        /**
         *
         */
        distinct(): {};
        /**
         *
         */
        purge(): boolean;
        /**
         *
         */
        forget(): boolean;
        checksum(obj: any): string;
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        getClassName(): string;
        setDi(di: any): void;
        /**
         *
         */
        getDi(): any;
    }
}
declare module "Reflection/Checksum" {
    export class Checksum {
        /**
         * Object become to string
         */
        private stringObject;
        /**
         * Build checksum of any javascript object
         * @param Object obj
         */
        constructor(obj?: any);
        /**
         *
         * @param obj
         */
        set(obj: any): void;
        /**
         * Get base 64 from string
         * @param String str
         */
        private utf8ToBase64(str);
        /**
         * Get checksum
         * @return String
         */
        getChecksum(): string;
    }
}
declare module "Starter/Restricted" {
    export class Restricted {
        static get(): any;
    }
}
declare module "Starter/ResolveController" {
    export class ResolveController {
        /**
         *
         */
        private di;
        /**
         *
         */
        private controllers;
        /**
         *
         * @param controllers
         */
        constructor(controllers: any);
        /**
         *
         * @param controller
         * @param key
         */
        resolveProperties(controller: any): void;
        /**
         *
         */
        resolve(): void;
    }
}
declare module "Url/Url" {
    import { Service } from "Di/Service";
    export class Url extends Service {
        constructor();
        /**
         *
         * @param url
         */
        getQuery(url?: any): {};
    }
}
declare module "Starter/ResolvePaths" {
    export class ResolvePaths {
        /**
         *
         */
        private paths;
        /**
         *
         */
        private di;
        /**
         *
         * @param paths
         */
        constructor(paths: any);
        /**
         *
         */
        resolve(): void;
    }
}
declare module "Starter/ResolveService" {
    export class ResolveService {
        /**
         *
         */
        private service;
        /**
         *
         */
        constructor(service?: any);
        /**
         *
         */
        resolve(): void;
    }
}
declare module "Starter/Starter" {
    import { ConfigInterface } from "Config/ConfigInterface";
    export class Starter {
        /**
         *
         */
        private scope;
        /**
         *
         */
        private config;
        /**
         *
         */
        private controllers;
        /**
         *
         */
        private data;
        /**
         *
         */
        constructor();
        /**
         *
         * @param scope
         */
        setScope(scope: any): void;
        /**
         *
         */
        getScope(): number;
        /**
         *
         */
        setControllers(controllers: any): void;
        /**
         *
         */
        getControllers(): any;
        /**
         *
         * @param config
         */
        setConfig(config: ConfigInterface): void;
        /**
         *
         */
        getConfig(): any;
        /**
         *
         * @param data
         */
        setData(data: any): void;
        /**
         *
         */
        getData(): any;
        /**
         *
         */
        private resolvePath();
        /**
         *
         */
        private resolveService();
        /**
         *
         */
        private resolveControllers();
        /**
         *
         */
        start(): void;
    }
}
declare module "Starter/Injector/InitializeComponents" {
    import { InjectionAwareInterface } from "Di/InjectionAwareInterface";
    export class InitializeComponents {
        /**
         *
         */
        private di;
        /**
         *
         * @param di
         */
        constructor(di: InjectionAwareInterface);
        /**
         *
         */
        inject(): void;
    }
}
declare module "Starter/Application" {
    import { ConfigInterface } from "Config/ConfigInterface";
    export class Application {
        /**
         *
         */
        private config;
        /**
         *
         */
        constructor(config: ConfigInterface);
        /**
         *
         */
        private fetchDi();
        /**
         *
         */
        start(): void;
    }
}
