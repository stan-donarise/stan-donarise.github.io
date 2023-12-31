declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        destructor(): void;
        toString(): string;
        toJSON(): any;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: (number | $mol_wire_sub)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_frame | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): void;
        reap(): void;
        toString(): string;
        toJSON(): string;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): void;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
    }
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_wire_async<Host extends object>(obj: Host): (Host extends (...args: infer Args) => infer Res ? Res extends Promise<any> ? Host : (...args: Args) => Promise<Res> : {}) & { [key in keyof Host]: Host[key] extends (...args: infer Args_1) => infer Res_1 ? Res_1 extends Promise<any> ? Host[key] : (...args: Args_1) => Promise<Res_1> : Host[key]; };
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    function $mol_style_attach_force(): HTMLStyleElement;
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'url' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_filter;
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit<any>, mid: $mol_style_unit<any>, max: $mol_style_unit<any>): $mol_style_func<"clamp", $mol_style_unit<any>[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit<$mol_style_unit_length>): $mol_style_func<"blur", string | $mol_style_unit<$mol_style_unit_length>>;
        static brightness(value?: number | $mol_style_unit<'%'>): $mol_style_func<"brightness", string | number | $mol_style_unit<"%">>;
        static contrast(value?: number | $mol_style_unit<'%'>): $mol_style_func<"contrast", string | number | $mol_style_unit<"%">>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit<$mol_style_unit_length>, y_offset: $mol_style_unit<$mol_style_unit_length>, blur_radius?: $mol_style_unit<$mol_style_unit_length>): $mol_style_func<"drop-shadow", ($mol_style_unit<$mol_style_unit_length> | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit<'%'>): $mol_style_func<"grayscale", string | number | $mol_style_unit<"%">>;
        static hue_rotate(value?: 0 | $mol_style_unit<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0 | $mol_style_unit<$mol_style_unit_angle>>;
        static invert(value?: number | $mol_style_unit<'%'>): $mol_style_func<"invert", string | number | $mol_style_unit<"%">>;
        static opacity(value?: number | $mol_style_unit<'%'>): $mol_style_func<"opacity", string | number | $mol_style_unit<"%">>;
        static sepia(value?: number | $mol_style_unit<'%'>): $mol_style_func<"sepia", string | number | $mol_style_unit<"%">>;
        static saturate(value?: number | $mol_style_unit<'%'>): $mol_style_func<"saturate", string | number | $mol_style_unit<"%">>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit<$mol_style_unit_time> | $mol_style_unit<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit<$mol_style_unit_time> | $mol_style_unit<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<'url'> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            }[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    type $mol_style_prop_result = Record<string, $mol_style_func<'var'>>;
    function $mol_style_prop(prefix: string, postfixes: Array<string>): $mol_style_prop_result;
}

declare namespace $ {
    const $mol_theme: $mol_style_prop_result;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: $mol_style_prop_result;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: string | null): string | null;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        scroll_top(next?: any): number;
        scroll_left(next?: any): number;
        field(): Record<string, any>;
        event(): Record<string, any>;
        tabindex(): number;
        event_scroll(event?: any): any;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_book2 extends $mol_scroll {
        menu_title(): string;
        sub(): readonly $mol_view[];
        minimal_width(): number;
        Placeholder(): $mol_view;
        Gap(id: any): $mol_view;
        pages(): readonly $mol_view[];
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        menu_title(): string;
        sub(): readonly $mol_view[];
        bring(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_array_shuffle<Item>(array: readonly Item[]): Item[];
}

declare namespace $.$$ {
    class $ss_linkpad_color_generator {
        private step;
        private start;
        private asset;
        constructor();
        private generateAsset;
        get_next_hue(): number;
        get_next_hsl(): {
            h: number;
            s: number;
            l: number;
        };
        foresee(): number;
    }
}

declare namespace $ {
    class $mol_ghost extends $mol_view {
        Sub(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(next?: Element): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_store<Data> extends $mol_object2 {
        data_default?: Data | undefined;
        constructor(data_default?: Data | undefined);
        data(next?: Data): NonNullable<Data> | (Data & null);
        snapshot(next?: string): string;
        value<Key extends keyof Data>(key: Key, next?: Data[Key]): Data[Key] & {};
        selection<Key extends keyof Data>(key: Key, next?: number[]): number[];
        sub<Key extends keyof Data, Lens extends $mol_store<Data[Key]> = $mol_store<NonNullable<Data[Key]>>>(key: Key, lens?: Lens): Lens;
        reset(): void;
        active(): boolean;
    }
}

declare namespace $ {
    interface Link_DTO {
        id: string;
        type_id: string;
        from_id?: string;
        to_id?: string;
        name?: string;
        val?: string;
        hue?: number;
        undef?: boolean;
    }
    class $ss_linkpad_link_data extends $mol_store<Link_DTO> {
        id(next?: string): string;
        type_id(next?: string): string;
        from_id(): string;
        to_id(): string;
        val(next?: string): string;
        hue(next?: number): number;
        undef(next?: boolean): boolean;
        name(next?: string): string;
    }
}

declare namespace $ {
    class $ss_blocks_noedit extends $mol_view {
        field(): Record<string, any>;
    }
}

declare namespace $ {
    class $ss_blocks_block extends $mol_view {
        Placeholder(): $ss_blocks_noedit;
        sub(): readonly any[];
        value_setted(next?: any): string;
        value_changed(next?: any): string;
        attr(): Record<string, any>;
        style(): Record<string, any>;
        visible_placeholder(): string;
        placeholder(): string;
        on_ctrl_x(event?: any): any;
        keydown_enter(event?: any): any;
        before_any_input(event?: any): any;
        before_insert_text(event?: any): any;
        beforeinput(next?: any): any;
        keydown(next?: any): any;
        input(next?: any): any;
        dragenter(next?: any): any;
        drop(next?: any): any;
        drag(next?: any): any;
        dragleave(next?: any): any;
        paste(next?: any): any;
        cut(next?: any): any;
        event(): Record<string, any>;
        focused(next?: any): boolean;
        hovered(next?: any): boolean;
        focused_or_hovered(): boolean;
        on_focused_or_hovered(id: any): any;
        focus(): any;
        default_value(): string;
        focus_state(next?: any): string;
        empty(next?: any): boolean;
        before_content(): string;
        after_content(): string;
        opacity(): number;
        mouseout(next?: any): any;
        mouseover(next?: any): any;
    }
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $.$$ {
    type $ss_blocks_block_focus_states = 'focused' | 'setting' | 'blurred';
    type $ss_blocks_block_id = any;
    function $ss_blocks_block_anchor_el(): HTMLElement;
    function $ss_blocks_block_trim(str: string): string;
    class $ss_blocks_block extends $.$ss_blocks_block {
        br(): HTMLBRElement;
        sub(): readonly any[];
        update_value(data_value: string): void;
        input(e?: any): void;
        before_content(): string;
        empty(): boolean;
        visible_placeholder(): string;
        auto(): void;
        set_focused_or_hovered(args: {
            focused?: boolean;
            hovered?: boolean;
        }): void;
        focus_state(next?: $ss_blocks_block_focus_states): $ss_blocks_block_focus_states;
        focus(pos?: 'start' | 'end'): Promise<void>;
        beforeinput(e?: InputEvent): any;
        on_ctrl_x(e?: any): void;
        keydown(e?: any): any;
        dragenter(e: any): void;
        drop(e: any): void;
        drag(e: any): void;
        dragleave(e: any): void;
        paste(e: any): void;
        cut(e: any): void;
        mouseover(): void;
        mouseout(): void;
        hovered(next?: any): boolean;
        focused(next?: any): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $ss_linkpad_link_hover extends $mol_view {
        hovered(next?: any): boolean;
        event(): Record<string, any>;
        mouseenter(next?: any): any;
        mouseleave(next?: any): any;
    }
}

declare namespace $.$$ {
    class $ss_linkpad_link_hover extends $.$ss_linkpad_link_hover {
        mouseenter(event?: MouseEvent): void;
        mouseleave(event?: MouseEvent): void;
    }
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
        font_size(): number;
        font_family(): string;
        style_size(): Record<string, any>;
    }
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): Record<string, any>;
        view_box(): string;
        aspect(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): Record<string, any>;
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        minimal_width(): number;
        minimal_height(): number;
        sub(): readonly any[];
        path(): string;
        Path(): $mol_svg_path;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_link extends $mol_view {
        uri(): string;
        dom_name(): string;
        attr(): Record<string, any>;
        sub(): readonly $mol_view_content[];
        arg(): Record<string, any>;
        event(): Record<string, any>;
        uri_toggle(): string;
        hint(): string;
        hint_safe(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        event_click(event?: any): any;
        click(event?: any): any;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri_toggle(): string;
        uri(): string;
        uri_off(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        external(): boolean;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
        hint_safe(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_chevron_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $ss_blocks extends $mol_object2 {
        Block(id: any): $$.$ss_blocks_block;
        beforeinput(next?: any): any;
        keydown(next?: any): any;
        input(next?: any): any;
        dragenter(next?: any): any;
        drop(next?: any): any;
        drag(next?: any): any;
        dragleave(next?: any): any;
        paste(next?: any): any;
        cut(next?: any): any;
    }
}

declare namespace $.$$ {
    class $ss_blocks extends $.$ss_blocks {
        constructor();
        block_dom_name(): string;
        Block(id: $ss_blocks_block_id): $ss_blocks_block;
        block_from_node(node: Element): $ss_blocks_block;
        block_from_sel(): $ss_blocks_block | undefined;
        input(e?: any): void;
        beforeinput(e?: any): void;
        keydown(e?: any): void;
        dragenter(e: any): void;
        drop(e: any): void;
        drag(e: any): void;
        dragleave(e: any): void;
        paste(e: any): void;
        cut(e: any): void;
    }
}

declare namespace $ {
    class $ss_linkpad_link_default extends $mol_view {
        ui_id(): any;
        all_link_ids(next?: any): readonly string[];
        Link_data(id: any): any;
        type_name(): string;
        hide_contain(next?: any): boolean;
        from_id(): string;
        link_id(): string;
        data(): $ss_linkpad_link_data;
        type_data(): $ss_linkpad_link_data;
        Block(id: any): $$.$ss_blocks_block;
        from_view(): readonly any[];
        left_line(): readonly any[];
        right_line(): readonly any[];
        Icon(): $mol_view;
        Name(): $mol_view;
        self_view(): readonly any[];
        type_and_name(): readonly any[];
        value_and_id(): readonly any[];
        self_node(): readonly any[];
        self_link(): readonly any[];
        links(): readonly $ss_linkpad_link[];
        links_with_slots(): readonly any[];
        slot_value(id: any, next?: any): string;
        slot_focused_or_hovered(id: any, next?: any): boolean;
        add_new_link(id: any): any;
        replace(id: any): any;
        replace_to_link(id: any): any;
        Slot(id: any): $mol_view;
        links_view(): readonly any[];
        Connected_link(id: any): $mol_view;
        to_link_gap(): readonly any[];
        to_link_view(): readonly any[];
        sub(): readonly any[];
        attr(): Record<string, any>;
        style(): Record<string, any>;
        icon(): string;
        Name_block(): $$.$ss_blocks_block;
        self_sub(): readonly any[];
        self_hovered(next?: any): boolean;
        Self(): $$.$ss_linkpad_link_hover;
        Type(): $ss_blocks_noedit;
        name(): string;
        Name_disabled(): $ss_blocks_noedit;
        Value_block(): $$.$ss_blocks_block;
        Value(): $mol_view;
        Link_id(): $ss_blocks_noedit;
        arg_path(): any;
        close_panel(): any;
        Open_icon(): $mol_icon_chevron_right;
        Open(): $$.$mol_link;
        Open_block(): $ss_blocks_noedit;
        Circle(): $ss_blocks_noedit;
        Line_bottom(): $ss_blocks_noedit;
        Circle_and_line(): $ss_blocks_noedit;
        Label(): $mol_view;
        Chevron(): $mol_icon_chevron_down;
        Right_line(): $ss_blocks_noedit;
        Link_picture(): $ss_blocks_noedit;
        Slot_block(id: any): $$.$ss_blocks_block;
        Links(): $mol_view;
        Left_line(id: any): $ss_blocks_noedit;
        connected_link(id: any): any;
        Connected_link_row(id: any): $mol_view;
        To_link_gap(): $ss_blocks_noedit;
        to_link(): any;
        To_link(): $mol_view;
        Slot_to_link(): $mol_view;
        From_id(): $ss_blocks_noedit;
        is_node(): boolean;
        hide_last_line(next?: any): boolean;
        has_links(): boolean;
        has_name(): boolean;
        color(): string;
        semitransporent(): string;
        type_name_before(): string;
    }
}

declare namespace $.$$ {
    class $ss_linkpad_link_default extends $.$ss_linkpad_link_default {
        type_data(): $ss_linkpad_link_data;
        type_name(): string;
        type_name_before(): string;
        from_view(): readonly any[];
        self_view(): readonly any[];
        to_link_gap(): readonly any[];
        self_sub(): readonly any[];
        connected_link(pos: number): $.$ss_linkpad_link;
        links_with_slots(): readonly any[];
        has_links(): boolean;
        is_node(): boolean;
        to_link_view(): readonly any[];
        Name_block(): $ss_blocks_block;
        auto(): void;
        slot_focused_or_hovered(i: number, next?: any): boolean;
        Slot_block(i: number): $ss_blocks_block;
        Type_block(): $ss_blocks_block;
        color(): string;
        semitransporent(): string;
        Value_block(): $ss_blocks_block;
        name(): string;
        has_name(): boolean;
        type_and_name(): readonly any[];
        value_and_id(): readonly any[];
        arg_path(): string | null;
        close_panel(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_linkpad_link_type extends $ss_linkpad_link_default {
        icon(): string;
        Label(): $mol_view;
    }
}

declare namespace $.$$ {
    class $ss_linkpad_link_type extends $.$ss_linkpad_link_type {
        color(): string;
        semitransporent(): string;
    }
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        showed(next?: any): boolean;
        align_vert(): string;
        align_hor(): string;
        prefer(): string;
        sub(): readonly any[];
        sub_visible(): readonly any[];
        Anchor(): any;
        align(): string;
        bubble_content(): readonly $mol_view_content[];
        height_max(): number;
        Bubble(): $mol_pop_bubble;
    }
    class $mol_pop_bubble extends $mol_view {
        sub(): readonly $mol_view_content[];
        style(): Record<string, any>;
        attr(): Record<string, any>;
        content(): readonly $mol_view_content[];
        height_max(): number;
        align(): string;
    }
}

declare namespace $ {
    let $mol_layer: $mol_style_prop_result;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
        View_port(): $mol_view;
        view_port(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | {
            left: number;
            top: number;
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_pop_over extends $mol_pop {
        showed(): boolean;
        attr(): Record<string, any>;
        event(): Record<string, any>;
        hovered(next?: any): boolean;
        event_show(event?: any): any;
        event_hide(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_pop_over extends $.$mol_pop_over {
        event_show(event?: MouseEvent): void;
        event_hide(event?: MouseEvent): void;
        showed(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_speck extends $mol_view {
        attr(): Record<string, any>;
        style(): Record<string, any>;
        sub(): readonly any[];
        theme(): string;
        value(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        click(event?: any): any;
        event_click(event?: any): any;
        event(): Record<string, any>;
        attr(): Record<string, any>;
        sub(): readonly $mol_view_content[];
        Speck(): $mol_speck;
        event_activate(event?: any): any;
        clicks(event?: any): any;
        event_key_press(event?: any): any;
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
        hint_safe(): string;
        error(): string;
    }
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        attr(): Record<string, any>;
        sub(): readonly $mol_view_content[];
        checked(next?: any): boolean;
        aria_checked(): string;
        aria_role(): string;
        Icon(): any;
        title(): string;
        Title(): $mol_view;
        label(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {
    class $mol_pick extends $mol_pop {
        event(): Record<string, any>;
        Anchor(): $$.$mol_check;
        keydown(event?: any): any;
        trigger_enabled(): boolean;
        trigger_content(): readonly $mol_view_content[];
        hint(): string;
        Trigger(): $$.$mol_check;
    }
}

declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare var $node: any;

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        reset(): void;
        version(): string;
        abstract ensure(): void;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array): Uint8Array;
        text(next?: string, virt?: 'virt'): string;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
    }
}

declare namespace $ {
    function $mol_wire_sync<Host extends object>(obj: Host): (Host extends (...args: infer Args) => infer Res ? Res extends Promise<infer Res2> ? (...args: Args) => Res2 : Host : {}) & { [key in keyof Host]: Host[key] extends (...args: infer Args_1) => Promise<infer Res_1> ? (...args: Args_1) => Res_1 : Host[key]; };
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        status(): "success" | "unknown" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request(input: RequestInfo, init?: RequestInit): Promise<Response> & {
            destructor: () => void;
        };
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_file_web extends $mol_file {
        static absolute(path: string): $mol_file_web;
        static relative(path: string): $mol_file_web;
        static base: string;
        buffer(next?: Uint8Array): Uint8Array;
        stat(next?: $mol_file_stat, virt?: 'virt'): $mol_file_stat;
        resolve(path: string): $mol_file_web;
        ensure(): void;
        sub(): $mol_file[];
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): void;
    }
}

declare namespace $ {
    function $mol_huggingface_run(this: $, space: string, method: string | number, ...data: readonly any[]): readonly any[];
    function $mol_huggingface_rest(space: string, method: string, ...data: readonly any[]): readonly any[];
    function $mol_huggingface_ws(space: string, fn_index: number, ...data: readonly any[]): Promise<readonly any[]> & {
        destructor: () => void;
    };
}

declare namespace $ {
    function $hyoo_lingua_translate(this: $, lang: string, text: string): string;
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {
    class $mol_hotkey extends $mol_plugin {
        event(): Record<string, any>;
        key(): Record<string, any>;
        mod_ctrl(): boolean;
        mod_alt(): boolean;
        mod_shift(): boolean;
        keydown(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): {
            [x: number]: ((event: KeyboardEvent) => void) | undefined;
            readonly backspace?: ((event: KeyboardEvent) => void) | undefined;
            readonly tab?: ((event: KeyboardEvent) => void) | undefined;
            readonly enter?: ((event: KeyboardEvent) => void) | undefined;
            readonly shift?: ((event: KeyboardEvent) => void) | undefined;
            readonly ctrl?: ((event: KeyboardEvent) => void) | undefined;
            readonly alt?: ((event: KeyboardEvent) => void) | undefined;
            readonly pause?: ((event: KeyboardEvent) => void) | undefined;
            readonly capsLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly escape?: ((event: KeyboardEvent) => void) | undefined;
            readonly space?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageUp?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageDown?: ((event: KeyboardEvent) => void) | undefined;
            readonly end?: ((event: KeyboardEvent) => void) | undefined;
            readonly home?: ((event: KeyboardEvent) => void) | undefined;
            readonly left?: ((event: KeyboardEvent) => void) | undefined;
            readonly up?: ((event: KeyboardEvent) => void) | undefined;
            readonly right?: ((event: KeyboardEvent) => void) | undefined;
            readonly down?: ((event: KeyboardEvent) => void) | undefined;
            readonly insert?: ((event: KeyboardEvent) => void) | undefined;
            readonly delete?: ((event: KeyboardEvent) => void) | undefined;
            readonly key0?: ((event: KeyboardEvent) => void) | undefined;
            readonly key1?: ((event: KeyboardEvent) => void) | undefined;
            readonly key2?: ((event: KeyboardEvent) => void) | undefined;
            readonly key3?: ((event: KeyboardEvent) => void) | undefined;
            readonly key4?: ((event: KeyboardEvent) => void) | undefined;
            readonly key5?: ((event: KeyboardEvent) => void) | undefined;
            readonly key6?: ((event: KeyboardEvent) => void) | undefined;
            readonly key7?: ((event: KeyboardEvent) => void) | undefined;
            readonly key8?: ((event: KeyboardEvent) => void) | undefined;
            readonly key9?: ((event: KeyboardEvent) => void) | undefined;
            readonly A?: ((event: KeyboardEvent) => void) | undefined;
            readonly B?: ((event: KeyboardEvent) => void) | undefined;
            readonly C?: ((event: KeyboardEvent) => void) | undefined;
            readonly D?: ((event: KeyboardEvent) => void) | undefined;
            readonly E?: ((event: KeyboardEvent) => void) | undefined;
            readonly F?: ((event: KeyboardEvent) => void) | undefined;
            readonly G?: ((event: KeyboardEvent) => void) | undefined;
            readonly H?: ((event: KeyboardEvent) => void) | undefined;
            readonly I?: ((event: KeyboardEvent) => void) | undefined;
            readonly J?: ((event: KeyboardEvent) => void) | undefined;
            readonly K?: ((event: KeyboardEvent) => void) | undefined;
            readonly L?: ((event: KeyboardEvent) => void) | undefined;
            readonly M?: ((event: KeyboardEvent) => void) | undefined;
            readonly N?: ((event: KeyboardEvent) => void) | undefined;
            readonly O?: ((event: KeyboardEvent) => void) | undefined;
            readonly P?: ((event: KeyboardEvent) => void) | undefined;
            readonly Q?: ((event: KeyboardEvent) => void) | undefined;
            readonly R?: ((event: KeyboardEvent) => void) | undefined;
            readonly S?: ((event: KeyboardEvent) => void) | undefined;
            readonly T?: ((event: KeyboardEvent) => void) | undefined;
            readonly U?: ((event: KeyboardEvent) => void) | undefined;
            readonly V?: ((event: KeyboardEvent) => void) | undefined;
            readonly W?: ((event: KeyboardEvent) => void) | undefined;
            readonly X?: ((event: KeyboardEvent) => void) | undefined;
            readonly Y?: ((event: KeyboardEvent) => void) | undefined;
            readonly Z?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaRight?: ((event: KeyboardEvent) => void) | undefined;
            readonly select?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad0?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad1?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad2?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad3?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad4?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad5?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad6?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad7?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad8?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad9?: ((event: KeyboardEvent) => void) | undefined;
            readonly multiply?: ((event: KeyboardEvent) => void) | undefined;
            readonly add?: ((event: KeyboardEvent) => void) | undefined;
            readonly subtract?: ((event: KeyboardEvent) => void) | undefined;
            readonly decimal?: ((event: KeyboardEvent) => void) | undefined;
            readonly divide?: ((event: KeyboardEvent) => void) | undefined;
            readonly F1?: ((event: KeyboardEvent) => void) | undefined;
            readonly F2?: ((event: KeyboardEvent) => void) | undefined;
            readonly F3?: ((event: KeyboardEvent) => void) | undefined;
            readonly F4?: ((event: KeyboardEvent) => void) | undefined;
            readonly F5?: ((event: KeyboardEvent) => void) | undefined;
            readonly F6?: ((event: KeyboardEvent) => void) | undefined;
            readonly F7?: ((event: KeyboardEvent) => void) | undefined;
            readonly F8?: ((event: KeyboardEvent) => void) | undefined;
            readonly F9?: ((event: KeyboardEvent) => void) | undefined;
            readonly F10?: ((event: KeyboardEvent) => void) | undefined;
            readonly F11?: ((event: KeyboardEvent) => void) | undefined;
            readonly F12?: ((event: KeyboardEvent) => void) | undefined;
            readonly numLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly scrollLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly semicolon?: ((event: KeyboardEvent) => void) | undefined;
            readonly equals?: ((event: KeyboardEvent) => void) | undefined;
            readonly comma?: ((event: KeyboardEvent) => void) | undefined;
            readonly dash?: ((event: KeyboardEvent) => void) | undefined;
            readonly period?: ((event: KeyboardEvent) => void) | undefined;
            readonly forwardSlash?: ((event: KeyboardEvent) => void) | undefined;
            readonly graveAccent?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketOpen?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBack?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBackLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketClose?: ((event: KeyboardEvent) => void) | undefined;
            readonly quoteSingle?: ((event: KeyboardEvent) => void) | undefined;
        };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_string extends $mol_view {
        dom_name(): string;
        enabled(): boolean;
        minimal_height(): number;
        autocomplete(): boolean;
        selection(next?: any): readonly number[];
        auto(): readonly any[];
        field(): Record<string, any>;
        attr(): Record<string, any>;
        event(): Record<string, any>;
        plugins(): readonly any[];
        selection_watcher(): any;
        disabled(): boolean;
        value(next?: any): string;
        value_changed(next?: any): string;
        hint(): string;
        hint_visible(): string;
        spellcheck(): boolean;
        autocomplete_native(): string;
        selection_end(): number;
        selection_start(): number;
        keyboard(): string;
        enter(): string;
        length_max(): number;
        type(next?: any): string;
        event_change(event?: any): any;
        submit_with_ctrl(): boolean;
        submit(event?: any): any;
        Submit(): $$.$mol_hotkey;
    }
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_dots_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_paragraph extends $mol_view {
        line_height(): number;
        letter_width(): number;
        width_limit(): number;
        row_width(): number;
        sub(): readonly any[];
    }
}

declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_dimmer extends $mol_paragraph {
        haystack(): string;
        needle(): string;
        sub(): readonly $mol_view_content[];
        Low(id: any): $$.$mol_paragraph;
        High(id: any): $$.$mol_paragraph;
        parts(): readonly $mol_view_content[];
        string(id: any): string;
    }
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<$mol_type_merge_object<Intersection>, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | RegExpMatchArray;
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        cycle(next?: any): boolean;
        mod_ctrl(): boolean;
        mod_shift(): boolean;
        mod_alt(): boolean;
        keys_x(next?: any): readonly any[];
        keys_y(next?: any): readonly any[];
        current_x(next?: any): any;
        current_y(next?: any): any;
        event_up(event?: any): any;
        event_down(event?: any): any;
        event_left(event?: any): any;
        event_right(event?: any): any;
        event(): Record<string, any>;
        event_key(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        render_visible_only(): boolean;
        render_over(): number;
        sub(): readonly $mol_view[];
        Empty(): $mol_view;
        Gap_before(): $mol_view;
        Gap_after(): $mol_view;
        view_window(): readonly any[];
        rows(): readonly $mol_view[];
        gap_before(): number;
        gap_after(): number;
    }
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_select extends $mol_pick {
        dictionary(next?: any): Record<string, any>;
        options(): readonly string[];
        value(next?: any): string;
        option_label_default(): string;
        Option_row(id: any): $mol_button_minor;
        No_options(): $mol_view;
        plugins(): readonly any[];
        hint(): string;
        bubble_content(): readonly any[];
        Filter(): $$.$mol_string;
        Trigger_icon(): $mol_icon_dots_vertical;
        event_select(id: any, event?: any): any;
        option_label(id: any): string;
        filter_pattern(next?: any): string;
        Option_label(id: any): $$.$mol_dimmer;
        option_content(id: any): readonly any[];
        no_options_message(): string;
        nav_components(): readonly $mol_view[];
        option_focused(component?: any): any;
        nav_cycle(next?: any): boolean;
        Nav(): $$.$mol_nav;
        menu_content(): readonly $mol_view[];
        Menu(): $$.$mol_list;
        Bubble_pane(): $$.$mol_scroll;
        submit(event?: any): any;
        enabled(): boolean;
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $mol_button_minor | $mol_string | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_button_minor | $mol_string)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): ($mol_view | $mol_button_minor)[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $ss_editor_noedit extends $mol_view {
        field(): Record<string, any>;
    }
}

declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    class $ss_editor_node_data extends $mol_object2 {
        id(): string;
        value(next?: any): string;
        type(next?: any): string;
        child_ids(next?: any): readonly string[];
        child_nodes(next?: any): readonly $ss_editor_node_data[];
        tree(next?: any): $mol_tree2_empty;
        multiple(next?: any): boolean;
        changeable(next?: any): boolean;
        binded(next?: any): boolean;
        data_tree(id: any, next?: any): $mol_tree2_empty;
        data_value(id: any, next?: any): string;
        data_type(id: any, next?: any): string;
        data_child_ids(id: any, next?: any): readonly string[];
        data_child_nodes(id: any, next?: any): readonly $ss_editor_node_data[];
        data_changeable(id: any, next?: any): boolean;
        data_multiple(id: any, next?: any): boolean;
    }
}

declare namespace $.$$ {
    type $ss_editor_node_data_id = string;
    class $ss_editor_node_data extends $.$ss_editor_node_data {
        binded(next?: any): boolean;
    }
}

declare namespace $ {
    class $ss_editor_node_ui_default extends $mol_view {
        id(): string;
        data_node(): $$.$ss_editor_node_data;
        sub(): readonly any[];
        attr(): Record<string, any>;
        Block(): $$.$ss_blocks_block;
        Self_body(): $mol_view;
        children(): readonly $ss_editor_node_ui[];
        Children(): $$.$mol_list;
        block_focused(): boolean;
    }
}

declare namespace $.$$ {
    class $ss_editor_node_ui_default extends $.$ss_editor_node_ui_default {
        block_focused(): boolean;
        auto(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_editor_node_ui_pop extends $ss_editor_node_ui_default {
        sub(): readonly any[];
        Autocomplete_bubble_content(): $ss_editor_noedit;
        autocomplete(): boolean;
        data_node(): $$.$ss_editor_node_data;
        Bubble_pane(): $$.$mol_scroll;
        options_filtered(): readonly string[];
        Autocomplete(): $$.$mol_select;
        attr(): Record<string, any>;
        showed(next?: any): boolean;
        test(): string;
        Anchor(): $mol_view;
        bubble_content(): readonly any[];
        Bubble_content(): $ss_editor_noedit;
        visible_bubble_content(): readonly any[];
        self_hovered(): boolean;
        Self_body(): $$.$mol_pop_over;
        Children(): $$.$mol_list;
        bubble_content_autocomplete(): readonly any[];
        Bubble_scroll(): $$.$mol_scroll;
        autocomplete_footer(): readonly any[];
        Autocomplete_footer(): $mol_view;
        event_select(id: any, next?: any): any;
        select_dict(): Record<string, any>;
        filter_pattern(): string;
    }
}

declare namespace $.$$ {
    class $ss_editor_node_ui_pop extends $.$ss_editor_node_ui_pop {
        autocomplete_showed(): boolean;
        visible_bubble_content(): $ss_editor_noedit[];
        showed(): boolean;
        event_select(opt: string, e: Event): null;
        filter_pattern(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_icon_key extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_key_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cached extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_box extends $mol_check {
        Icon(): $mol_icon_tick;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_trash_can extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trash_can_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_labeler extends $mol_list {
        rows(): readonly any[];
        label(): readonly $mol_view_content[];
        Label(): $mol_view;
        content(): readonly any[];
        Content(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $ss_editor_node_ui_prop extends $ss_editor_node_ui_pop {
        type(): string;
        binded(next?: any): boolean;
        data_node(): $$.$ss_editor_node_data;
        drop_node(id: any): any;
        unbind_prop(id: any): any;
        autocomplete(): boolean;
        replace(id: any, next?: any): any;
        add_object_in_list(id: any, next?: any): any;
        position(): string;
        id(): string;
        sub(): readonly any[];
        Anchor(): $mol_view;
        tail_ui_node_type(): any;
        tail_ui_node_nullable(): any;
        List_body(): $ss_editor_noedit;
        List_children(): $$.$mol_list;
        Dict_body(): $ss_editor_noedit;
        Dict_children(): $$.$mol_list;
        tail_ui_node(): $$.$ss_editor_node_ui;
        bubble_content(): readonly any[];
        Add_list_item_popover(): $$.$mol_pop_over;
        attr(): Record<string, any>;
        Self_block(): $mol_view;
        Icon_multiple(): $mol_icon_key_variant;
        Icon_changeable(): $mol_icon_cached;
        icons(): readonly any[];
        Icons(): $ss_editor_noedit;
        self_sub(): readonly any[];
        changeable(next?: any): boolean;
        Changeable(): $mol_check_box;
        multiple(next?: any): boolean;
        Multiple(): $mol_check_box;
        drop(next?: any): any;
        Drop_icon(): $mol_icon_trash_can_outline;
        Drop(): $mol_button_minor;
        add_first(next?: any): any;
        Add_list_item_icon(): $mol_icon_plus_box;
        Add_list_item(): $mol_button_minor;
        pos_title(id: any): string;
        add_in_pos(id: any, next?: any): any;
        New_item_pos(id: any): $mol_button_minor;
        new_item_positions(): readonly any[];
        Position_label(): $mol_labeler;
    }
}

declare namespace $ {
    function $mol_range2<Item = number>(item?: (index: number) => Item, size?: () => number): Item[];
    class $mol_range2_array<Item> extends Array<Item> {
        concat(...tail: this[]): Item[];
        filter<Context>(check: (val: Item, index: number, list: Item[]) => boolean, context?: Context): Item[];
        forEach<Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => void, context?: Context): void;
        map<Item_out, Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => Item_out, context?: Context): Item_out[];
        reduce<Result>(merge: (result: Result, val: Item, index: number, list: Item[]) => Result, result?: Result): Result | undefined;
        slice(from?: number, to?: number): Item[];
        some<Context>(check: (this: Context, val: Item, index: number, list: Item[]) => boolean, context?: Context): boolean;
        every<Context = null>(check: (this: Context, val: Item, index: number, list: Item[]) => boolean, context?: Context): boolean;
    }
}

declare namespace $.$$ {
    class $ss_editor_node_ui_prop extends $.$ss_editor_node_ui_prop {
        changeable(next?: boolean): boolean;
        multiple(next?: boolean): boolean;
        icons(): ($mol_icon_key_variant | $mol_icon_cached)[];
        tail_ui_node_type(): string | null;
        tail_ui_node_nullable(): $.$ss_editor_node_ui | null;
        tail_ui_node(): $.$ss_editor_node_ui | $ss_editor_node_ui;
        self_sub(): $mol_view[];
        sub(): ($mol_pop_over | $mol_list)[];
        bubble_content(): any[];
        new_item_positions(): $mol_button_minor[];
        pos_title(i: number): string;
        drop(): void;
        add_first(): void;
        add_in_pos(pos: string): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_check_list extends $mol_view {
        Option(id: any): $$.$mol_check;
        options(): Record<string, any>;
        keys(): readonly string[];
        sub(): readonly $mol_check[];
        option_checked(id: any, next?: any): boolean;
        option_title(id: any): string;
        option_label(id: any): readonly any[];
        enabled(): boolean;
        option_enabled(id: any): boolean;
        option_hint(id: any): string;
        items(): readonly $mol_check[];
    }
}

declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        keys(): readonly string[];
        items(): $mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_switch extends $mol_check_list {
        value(next?: any): string;
    }
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: any): any;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $ss_editor_node_ui_prop_sub extends $ss_editor_node_ui_prop {
        data_node_parent(): $$.$ss_editor_node_data;
        props_of(id: any): readonly $mol_tree2[];
        set_subprop_tree(id: any, next?: any): any;
        position(): string;
        bubble_content(): readonly any[];
        autocomplete_footer(): readonly any[];
        attr(): Record<string, any>;
        Bind_popover(): $$.$mol_pop_over;
        valid(): boolean;
        bind(next?: any): boolean;
        Bind(): $mol_check_box;
        bind_value(next?: any): string;
        Switch_bind(): $$.$mol_switch;
    }
}

declare namespace $ {
    class $mol_view_tree2_error extends Error {
        readonly spans: readonly $mol_span[];
        constructor(message: string, spans: readonly $mol_span[]);
        toJSON(): {
            message: string;
            spans: readonly $mol_span[];
        };
    }
    class $mol_view_tree2_error_suggestions {
        readonly suggestions: readonly string[];
        constructor(suggestions: readonly string[]);
        toString(): string;
        toJSON(): readonly string[];
    }
    function $mol_view_tree2_error_str(strings: readonly string[], ...parts: readonly ($mol_span | readonly $mol_span[] | string | number | $mol_view_tree2_error_suggestions)[]): $mol_view_tree2_error;
}

declare namespace $ {
    function $mol_view_tree2_child(this: $, tree: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_classes(defs: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    type $mol_view_tree2_locales = Record<string, string>;
    class $mol_view_tree2_context extends $mol_object2 {
        protected parents: readonly $mol_view_tree2_prop[];
        protected locales: $mol_view_tree2_locales;
        protected methods: $mol_tree2[];
        readonly types: boolean;
        protected added_nodes: Map<string, {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        }>;
        protected array?: $mol_tree2 | undefined;
        constructor($: $, parents: readonly $mol_view_tree2_prop[], locales: $mol_view_tree2_locales, methods: $mol_tree2[], types?: boolean, added_nodes?: Map<string, {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        }>, array?: $mol_tree2 | undefined);
        protected clone(prefixes: readonly $mol_view_tree2_prop[], array?: $mol_tree2): $mol_view_tree2_context;
        parent(prefix: $mol_view_tree2_prop): $mol_view_tree2_context;
        root(): $mol_view_tree2_context;
        locale_disable(array: $mol_tree2): $mol_view_tree2_context;
        get_method({ name, src, key, next }: $mol_view_tree2_prop): {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        } | undefined;
        check_scope_vars({ name, key, next }: $mol_view_tree2_prop): undefined;
        index(owner: $mol_view_tree2_prop): number;
        method(index: number, method: $mol_tree2[]): void;
        protected locale_nodes: Map<string, $mol_tree2>;
        locale(operator: $mol_tree2): $mol_tree2;
    }
}

declare namespace $ {
    function $mol_view_tree2_normalize(this: $, defs: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_class_super(this: $, klass: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_class_props(this: $, klass: $mol_tree2): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_prop_split(this: $, src: $mol_tree2): {
        src: $mol_tree2;
        name: $mol_tree2;
        key: $mol_tree2 | undefined;
        next: $mol_tree2 | undefined;
    };
}

declare namespace $ {
    type $mol_view_tree2_prop = ReturnType<typeof $mol_view_tree2_prop_split>;
    function $mol_view_tree2_prop_name(this: $, prop: $mol_tree2): string;
    function $mol_view_tree2_prop_key(this: $, prop: $mol_tree2): string | undefined;
    function $mol_view_tree2_prop_next(this: $, prop: $mol_tree2): string | undefined;
}

declare namespace $ {
    function $mol_view_tree2_prop_quote(name: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    let $mol_view_tree2_prop_signature: $mol_regexp<{
        readonly name: string;
        readonly key: string;
        readonly next: string;
    }>;
}

declare namespace $.$$ {
    class $ss_editor_node_ui_prop_sub extends $.$ss_editor_node_ui_prop_sub {
        bind(next?: boolean): boolean;
        bind_value(next?: string): string;
        bubble_content(): ($mol_pop_over | $mol_button_minor)[];
        valid(): boolean;
        autocomplete_showed(): boolean;
        select_value(next?: any): string;
        props_of_class(): readonly $mol_tree2[];
        select_dict(): Record<string, string>;
        event_select(selected: string): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_editor_node_ui_prop_root extends $ss_editor_node_ui_prop_sub {
        position(): string;
    }
}

declare namespace $.$$ {
    class $ss_editor_node_ui_prop_root extends $.$ss_editor_node_ui_prop_root {
        bubble_content(): ($mol_pop_over | $mol_button_minor)[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_icon_find_replace extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $ss_editor_node_ui_class extends $ss_editor_node_ui_pop {
        data_node(): $$.$ss_editor_node_data;
        tree(): $mol_tree2_empty;
        sub(): readonly any[];
        autocomplete(): boolean;
        class_list(): readonly string[];
        Anchor(): $ss_editor_node_ui_class_self;
        bubble_content(): readonly any[];
        Block(): $$.$ss_blocks_block;
        valid(): boolean;
        clear(next?: any): any;
        Replace_class_icon(): $mol_icon_find_replace;
        Replace_class(): $mol_button_minor;
    }
    class $ss_editor_node_ui_class_self extends $mol_view {
        sub(): readonly any[];
        attr(): Record<string, any>;
        Dollar(): $ss_editor_noedit;
        Block(): $$.$ss_blocks_block;
        Label(): $mol_view;
        valid(): boolean;
    }
}

declare namespace $.$$ {
    class $ss_editor_node_ui_class extends $.$ss_editor_node_ui_class {
        valid(): boolean;
        autocomplete_showed(): boolean;
        select_dict(): {
            [k: string]: string;
        };
        event_select(class_name: string): void;
        clear(): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_editor_node_ui_class_base extends $ss_editor_node_ui_class {
        sub(): readonly any[];
        root_props(): readonly $ss_editor_node_ui_prop_root[];
        Props(): $mol_view;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_icon_playlist_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $ss_editor_node_ui_object extends $ss_editor_node_ui_pop {
        tree(): $mol_tree2_empty;
        library_tree(): $mol_tree2_empty;
        Block_fabric(id: any): $$.$ss_blocks_block;
        drop_node(id: any): any;
        drop_parent_node(id: any): any;
        replace(id: any, next?: any): any;
        add_subprop(id: any): any;
        add_sibling_object_above(id: any): any;
        autocomplete(): boolean;
        props_by_type(id: any): readonly $ss_editor_node_data[];
        data_node(): $$.$ss_editor_node_data;
        Class_body(): $$.$mol_pop_over;
        class_children(): readonly $ss_editor_node_ui[];
        class_ui_node(): $$.$ss_editor_node_ui;
        sub(): readonly any[];
        Anchor(): $mol_view;
        bubble_content(): readonly any[];
        autocomplete_footer(): readonly any[];
        Props(): $mol_view;
        Label_block(): $mol_view;
        Icon_multiple(): $mol_icon_key_variant;
        icons(): readonly any[];
        Icons(): $ss_editor_noedit;
        object_label(): readonly any[];
        Object_label(): $mol_view;
        Class_label(): $mol_view;
        add_new_subprop(next?: any): any;
        Props_select_icon(): $mol_icon_playlist_plus;
        Props_select(): $mol_button_minor;
        multiple(next?: any): boolean;
        Multiple(): $mol_check_box;
        clear(next?: any): any;
        Replace_icon(): $mol_icon_find_replace;
        Replace(): $mol_button_minor;
        drop(next?: any): any;
        Drop_icon(): $mol_icon_trash_can_outline;
        Drop(): $mol_button_minor;
    }
}

declare namespace $.$$ {
    class $ss_editor_node_ui_object extends $.$ss_editor_node_ui_object {
        multiple(next?: boolean): boolean;
        icons(): $mol_icon_key_variant[];
        class_ui_node(): $.$ss_editor_node_ui;
        object_label(): $mol_view[];
        type_tree(): $mol_tree2;
        clear(): void;
        select_value(next?: any): string;
        select_dict(): Record<string, string>;
        event_select(selected_data_id: string): void;
        class_tree(): $mol_tree2;
        class_tree_string(): string;
        drop(): void;
        add_sibling_above(): void;
        add_new_subprop(): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_editor_node_ui_component extends $ss_editor_node_ui_object {
        add_rootprop(next?: any): any;
        bubble_content(): readonly any[];
        Anchor(): $mol_view;
        add_new_rootprop(next?: any): any;
        Props_select_icon(): $mol_icon_playlist_plus;
        Props_select(): $mol_button_minor;
        Dollar(): $ss_editor_noedit;
        Component_label(): $mol_view;
    }
}

declare namespace $.$$ {
    class $ss_editor_node_ui_component extends $.$ss_editor_node_ui_component {
        Class_body(): $mol_pop_over;
        class_children(): $.$ss_editor_node_ui[];
        add_new_rootprop(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_editor_node_ui extends $mol_ghost {
        id(): string;
        data_id(): string;
        type(): string;
        data_node(): $$.$ss_editor_node_data;
        data_node_parent(): $$.$ss_editor_node_data;
        library_tree(): $mol_tree2_empty;
        Block(): $$.$ss_blocks_block;
        Block_fabric(id: any): $$.$ss_blocks_block;
        children(): readonly $ss_editor_node_ui[];
        Sub(): $ss_editor_node_ui_root;
        type_force(next?: any): string;
        variants(): Record<string, any>;
        Locale(): $ss_editor_node_ui_locale;
        Root(): $ss_editor_node_ui_root;
        Value(): $ss_editor_node_ui_value;
        String(): $ss_editor_node_ui_string;
        Bool(): $ss_editor_node_ui_bool;
        Null(): $ss_editor_node_ui_null;
        Left(): $ss_editor_node_ui_left;
        Right(): $ss_editor_node_ui_right;
        Bi(): $ss_editor_node_ui_bi;
        Default(): $$.$ss_editor_node_ui_default;
        List_body(): $ss_editor_noedit;
        List_children(): $$.$mol_list;
        List(): $ss_editor_node_ui_list;
        Dict_body(): $ss_editor_noedit;
        Dict_children(): $$.$mol_list;
        Dict(): $ss_editor_node_ui_dict;
        Key(): $ss_editor_node_ui_key;
        replace_prop(id: any, next?: any): any;
        add_object_in_list(id: any, next?: any): any;
        unbind_prop(id: any): any;
        Prop(): $$.$ss_editor_node_ui_prop;
        props_of(id: any): readonly $mol_tree2[];
        set_subprop_tree(id: any, next?: any): any;
        Prop_root(): $$.$ss_editor_node_ui_prop_root;
        Subprop(): $$.$ss_editor_node_ui_prop_sub;
        class_list(): readonly string[];
        Class_body(): $$.$mol_pop_over;
        valid_class(): boolean;
        Class(): $$.$ss_editor_node_ui_class;
        Class_base_body(): $$.$mol_pop_over;
        Class_base(): $ss_editor_node_ui_class_base;
        drop_node(id: any): any;
        drop_parent_node(id: any): any;
        add_sibling_object_above(id: any): any;
        add_rootprop(id: any): any;
        Component(): $$.$ss_editor_node_ui_component;
        props_by_type(id: any): readonly $ss_editor_node_data[];
        add_subprop(id: any): any;
        Object(): $$.$ss_editor_node_ui_object;
    }
    class $ss_editor_node_ui_root extends $ss_editor_node_ui_default {
        sub(): readonly any[];
    }
    class $ss_editor_node_ui_locale extends $ss_editor_node_ui_default {
        sub(): readonly any[];
    }
    class $ss_editor_node_ui_dict extends $ss_editor_node_ui_default {
        sub(): readonly any[];
        Children(): $$.$mol_list;
        Self_body(): $ss_editor_noedit;
        children(): readonly $ss_editor_node_ui[];
    }
    class $ss_editor_node_ui_value extends $ss_editor_node_ui_default {
    }
    class $ss_editor_node_ui_key extends $ss_editor_node_ui_default {
        sub(): readonly any[];
        Block(): $$.$ss_blocks_block;
        Self_body(): $mol_view;
        Delimiter(): $mol_view;
        children(): readonly $ss_editor_node_ui[];
        Children(): $$.$mol_list;
    }
    class $ss_editor_node_ui_null extends $ss_editor_node_ui_value {
        sub(): readonly any[];
        Block(): $$.$ss_blocks_block;
        Self_body(): $mol_view;
        Noeditable(): $ss_editor_noedit;
    }
    class $ss_editor_node_ui_bool extends $ss_editor_node_ui_value {
        sub(): readonly any[];
        Block(): $$.$ss_blocks_block;
        Self_body(): $mol_view;
        Noeditable(): $ss_editor_noedit;
    }
    class $ss_editor_node_ui_string extends $ss_editor_node_ui_value {
        sub(): readonly any[];
        Block(): $$.$ss_blocks_block;
        Self_body(): $mol_view;
        Noeditable(): $ss_editor_noedit;
    }
    class $ss_editor_node_ui_left extends $ss_editor_node_ui_default {
        value(next?: any): string;
        data_node(): $$.$ss_editor_node_data;
        sub(): readonly any[];
        Self_body(): $ss_editor_noedit;
    }
    class $ss_editor_node_ui_left_slot extends $ss_editor_node_ui_left {
        sub(): readonly any[];
        Self_body(): $ss_editor_noedit;
        Label(): $mol_view;
    }
    class $ss_editor_node_ui_right extends $ss_editor_node_ui_default {
        value(next?: any): string;
        data_node(): $$.$ss_editor_node_data;
        sub(): readonly any[];
        Self_body(): $ss_editor_noedit;
    }
    class $ss_editor_node_ui_bi extends $ss_editor_node_ui_default {
        value(next?: any): string;
        data_node(): $$.$ss_editor_node_data;
        sub(): readonly any[];
        Self_body(): $ss_editor_noedit;
    }
}

declare namespace $.$$ {
    type $ss_editor_node_ui_id = [$ss_editor_node_ui_id | null, $ss_editor_node_data_id];
    function $ss_editor_node_ui_id_build(data_id: string, parent_ui_id?: $ss_editor_node_ui_id | null): $ss_editor_node_ui_id;
    class $ss_editor_node_ui extends $.$ss_editor_node_ui {
        Sub(): any;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_page extends $mol_view {
        dom_name(): string;
        field(): Record<string, any>;
        sub(): readonly any[];
        tabindex(): number;
        Logo(): any;
        title_content(): readonly any[];
        Title(): $mol_view;
        tools(): readonly $mol_view_content[];
        Tools(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        body(): readonly $mol_view_content[];
        body_scroll_top(next?: any): number;
        Body(): $$.$mol_scroll;
        foot(): readonly $mol_view[];
        Foot(): $mol_view;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        bids(): readonly string[];
        label(): readonly any[];
        content(): readonly any[];
        name(): string;
        bid(): string;
        Bid(): $mol_view;
        control(): any;
    }
}

declare namespace $.$$ {
    class $mol_form_field extends $.$mol_form_field {
        bid(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_row extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form extends $mol_list {
        submit_allowed(): boolean;
        submit_blocked(): boolean;
        event(): Record<string, any>;
        submit(event?: any): any;
        rows(): readonly any[];
        keydown(event?: any): any;
        form_fields(): readonly $mol_form_field[];
        body(): readonly $mol_form_field[];
        Body(): $$.$mol_list;
        buttons(): readonly $mol_view[];
        foot(): readonly $mol_view[];
        Foot(): $mol_row;
    }
}

declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        form_fields(): readonly $mol_form_field[];
        submit_allowed(): boolean;
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
        attr(): Record<string, any>;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $ss_blocks_contenteditable extends $mol_view {
        Block(id: any): $$.$ss_blocks_block;
        blocks_beforeinput(next?: any): void;
        blocks_keydown(next?: any): void;
        blocks_input(next?: any): void;
        blocks_dragenter(next?: any): void;
        blocks_drop(next?: any): void;
        blocks_drag(next?: any): void;
        blocks_dragleave(next?: any): void;
        blocks_paste(next?: any): void;
        blocks_cut(next?: any): void;
        Blocks(): $$.$ss_blocks;
        sub(): readonly any[];
        field(): Record<string, any>;
        event(): Record<string, any>;
        Body(): $mol_view;
    }
}

declare namespace $ {
    class $ss_editor_node_ui_list extends $ss_editor_node_ui_default {
        Block_fabric(id: any): $$.$ss_blocks_block;
        sub(): readonly any[];
        Self_body(): $ss_editor_noedit;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_editor extends $mol_scroll {
        title(): string;
        sub(): readonly any[];
        lib(): $mol_tree2_empty;
        prop_ids(next?: any): readonly string[];
        props_by_type(id: any): readonly $ss_editor_node_data[];
        prop_norm_tree(id: any, next?: any): readonly $mol_tree2[];
        Ui_node(id: any): $$.$ss_editor_node_ui;
        Data_node(id: any): $$.$ss_editor_node_data;
        initial_tree_string(): string;
        Ui_root_node(next?: any): any;
        Block(id: any): $$.$ss_blocks_block;
        Contenteditable(): $ss_blocks_contenteditable;
        id(id: any): string;
        data_node_by_ui_id(id: any): $$.$ss_editor_node_data;
        data_node_parent_by_ui_id(id: any): $$.$ss_editor_node_data;
        ui_node_children(id: any, next?: any): readonly $ss_editor_node_ui[];
        library_tree(): $mol_tree2_empty;
        Ui_node_block(id: any): $$.$ss_blocks_block;
        Block_fabric(id: any): $$.$ss_blocks_block;
        drop_node(id: any): any;
        unbind_prop(id: any): any;
        drop_parent_node(id: any): any;
        add_sibling_object_above(id: any): any;
        replace_prop(id: any, next?: any): any;
        set_subprop_tree(id: any, next?: any): any;
        add_subprop(id: any): any;
        add_rootprop(id: any): any;
        add_object_in_list(id: any, next?: any): any;
        class_list(): readonly string[];
        props_of(id: any): readonly $mol_tree2[];
        data_tree(id: any, next?: any): $mol_tree2_empty;
        data_value(id: any, next?: any): string;
        data_type(id: any, next?: any): string;
        data_child_ids(id: any, next?: any): readonly string[];
        data_child_nodes(id: any, next?: any): readonly $ss_editor_node_data[];
        data_changeable(id: any, next?: any): boolean;
        data_multiple(id: any, next?: any): boolean;
    }
}

declare namespace $.$$ {
    type Prop_definition = {
        in_class: string;
        tree: $mol_tree2;
    };
    export class $ss_editor extends $.$ss_editor {
        auto(): void;
        add_data(tree: $mol_tree2, id?: string, type?: string): string;
        prop_sign(type: string): {
            name: string;
            changeable: boolean;
            multiple: boolean;
        };
        prop_name(type: string): string;
        prop_ids(next?: any): readonly string[];
        root_props(): $ss_editor_node_data[];
        props_by_type(type: string): $ss_editor_node_data[];
        add_prop_data(tree: $mol_tree2, type?: string): string;
        add_prop_sub_data(tree: $mol_tree2, id?: string): string;
        parse_prop_tree(parent_id: string, tree: $mol_tree2, parent_type?: string): string;
        add_prop_from_tree(tree: $mol_tree2): void;
        add_norm_subprop(obj_name: string, subprop_tree: $mol_tree2): void;
        data_id_to_prop_name(): void;
        prop_name_to_data_id(): void;
        init(tree: $mol_tree2): void;
        Ui_node_id_by_pos(pos: number, next: $ss_editor_node_ui | null): $ss_editor_node_ui | null;
        data_id_from_ui_id(ui_id: $ss_editor_node_ui_id): string;
        data_tree_from_ui_id(ui_id: $ss_editor_node_ui_id): $mol_tree2_empty;
        data_child_nodes(data_id: string): $ss_editor_node_data[];
        data_node_by_ui_id(ui_id: $ss_editor_node_ui_id): $ss_editor_node_data;
        data_node_parent_by_ui_id(ui_id: $ss_editor_node_ui_id): $ss_editor_node_data;
        ui_node_type(ui_id: $ss_editor_node_ui_id): string;
        id(id: string): string;
        Ui_node_block(ui_id: $ss_editor_node_ui_id): $ss_blocks_block;
        Block_fabric(id: string): $ss_blocks_block;
        ui_node_children(ui_id: $ss_editor_node_ui_id, next?: $ss_editor_node_ui[]): $ss_editor_node_ui[];
        drop_node(ui_id: $ss_editor_node_ui_id): void;
        replace_prop(from_prop_ui_id: $ss_editor_node_ui_id, to_prop_data_id: string): void;
        drop_parent_node(ui_id: $ss_editor_node_ui_id): void;
        unbind_prop(ui_id: $ss_editor_node_ui_id): void;
        add_sibling_object_above(ui_id: $ss_editor_node_ui_id): void;
        add_object_in_list(list_ui_id: $ss_editor_node_ui_id, pos: number): void;
        add_subprop(ui_id: $ss_editor_node_ui_id): void;
        add_rootprop(ui_id: $ss_editor_node_ui_id): void;
        set_subprop_tree(subprop_ui_id: $ss_editor_node_ui_id, subprop_tree: $mol_tree2): void;
        click(next?: any): void;
        library_tree(): $mol_tree2;
        library(): $mol_tree2;
        class_list(): string[];
        inherit_chain_trees(cl: string): $mol_tree2[];
        inherit_chain_names(cl: string): string[];
        props_map(base: string): Map<string, Prop_definition[]>;
        props_of(base: string): $mol_tree2[];
    }
    export {};
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_linkpad_link_undef extends $ss_linkpad_link_default {
        icon(): string;
        insert_view(): readonly any[];
        name_focused(next?: any): boolean;
        Label(): $$.$mol_pop_over;
        Link_id(): $ss_blocks_noedit;
        autocomplete(): boolean;
        Bubble_pane(): $$.$mol_scroll;
        options_filtered(): readonly string[];
        Autocomplete(): $$.$mol_select;
        insert(next?: any): any;
        Insert(): $mol_button_minor;
        Insert_button(): $ss_blocks_noedit;
        Insert_label(): $ss_blocks_noedit;
        Insert_row(): $ss_blocks_noedit;
        test(): string;
        Anchor(): $mol_view;
        Autocomplete_bubble_content(): $ss_editor_noedit;
        event_select(id: any, next?: any): any;
        select_dict(): Record<string, any>;
        filter_pattern(): string;
    }
}

declare namespace $.$$ {
    class $ss_linkpad_link_undef extends $.$ss_linkpad_link_undef {
        color(): string;
        semitransporent(): string;
        insert_view(): readonly any[];
        type_and_name(): readonly any[];
        Name_block(): $ss_blocks_block;
        insert(): void;
        filter_pattern(): string;
        valid(): boolean;
        autocomplete_showed(): boolean;
        select_value(next?: any): string;
        select_links(): {
            id: string;
            key: string;
        }[];
        select_dict(): Record<string, string>;
        event_select(selected: string): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_linkpad_link_page extends $ss_linkpad_link_default {
        value_and_id(): readonly any[];
        sub(): readonly any[];
        Page(): $mol_page;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $ss_linkpad_link extends $mol_ghost {
        Sub(): $mol_view;
        ui_type(): string;
        Link_data(id: any): any;
        variants(): Record<string, any>;
        Root(): $mol_view;
        add_new_link(id: any): any;
        replace(id: any): any;
        replace_to_link(id: any): any;
        hide_contain(next?: any): boolean;
        ui_id(): string;
        all_link_ids(next?: any): readonly string[];
        data(): any;
        Block(id: any): any;
        to_link(next?: any): any;
        links(): readonly $ss_linkpad_link[];
        Default_name_block(): $$.$ss_blocks_block;
        Default(): $$.$ss_linkpad_link_default;
        Type_name_block(): $$.$ss_blocks_block;
        Type_link(): $$.$ss_linkpad_link_type;
        Undef_name_block(): $$.$ss_blocks_block;
        Undef(): $$.$ss_linkpad_link_undef;
        Page_name_block(): $$.$ss_blocks_block;
        Page(): $ss_linkpad_link_page;
    }
}

declare namespace $.$$ {
    type $ss_linkpad_link_id = string;
    type $ss_linkpad_link_ui_id = [$ss_linkpad_link_ui_id | null, $ss_linkpad_link_id];
    type $ss_linkpad_link_block_id = [$ss_linkpad_link_ui_id, 'type' | 'value' | 'name' | string];
    function $ss_linkpad_link_ui_id_build(link_id: $ss_linkpad_link_id, parent_ui_id?: $ss_linkpad_link_ui_id | null): $ss_linkpad_link_ui_id;
    function $ss_linkpad_link_id_from_ui(ui_id: $ss_linkpad_link_ui_id): $ss_linkpad_link_id;
    function $ss_linkpad_link_id_parent_from_ui(ui_id: $ss_linkpad_link_ui_id): $ss_linkpad_link_id | undefined;
    class $ss_linkpad_link extends $.$ss_linkpad_link {
        type_data(): $ss_linkpad_link_data;
        ui_type(): string;
        Sub(): any;
    }
}

declare namespace $ {
    class $mol_icon_pencil extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cursor_move extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $ss_linkpad extends $mol_book2 {
        color_gen(): $$.$ss_linkpad_color_generator;
        raw_gql_path(next?: any): string;
        right_link_id(next?: any): string;
        pages(): readonly any[];
        Bubble(): $mol_view;
        all_link_ids(next?: any): readonly string[];
        Link_data(id: any): any;
        Link(id: any): $$.$ss_linkpad_link;
        link_links_id(id: any, next?: any): readonly string[];
        Root_user_link(next?: any): any;
        Block(id: any): $$.$ss_blocks_block;
        Blocks(): $$.$ss_blocks;
        Contenteditable_user(): $ss_blocks_contenteditable;
        Root_package_link(next?: any): any;
        Contenteditable_package(): $ss_blocks_contenteditable;
        Trash_icon(): $mol_icon_trash_can_outline;
        Trash(): $mol_button_minor;
        Edit_icon(): $mol_icon_pencil;
        Edit(): $mol_button_minor;
        Move_icon(): $mol_icon_cursor_move;
        Move(): $mol_button_minor;
        Tools_list(): $$.$mol_list;
        Tools(): $mol_pop_bubble;
        add_new_link(id: any): any;
        replace(id: any): any;
        replace_to_link(id: any): any;
        hide_contain(next?: any): boolean;
        ui_id(id: any): string;
        link_data_by_ui_id(id: any): any;
        to_link(id: any, next?: any): any;
        link_links(id: any): readonly $ss_linkpad_link[];
    }
}

declare namespace $ {
    type DeepClient = any;
    export class $ss_linkpad_lib_deep {
        static deepBundle(): {
            makeDeepClient: (path: string, ssl: boolean) => Promise<DeepClient>;
            minilinks: any;
        };
        static gql_path(next?: string): string;
        static deep(): any;
        static minilinks(): any;
    }
    export {};
}

declare namespace $ {
    function $mol_compare_text<Item>(item?: (item: Item) => string): (a: Item, b: Item) => number;
}

declare namespace $.$$ {
    type Link_id = string;
    type Link = any;
    export class $ss_linkpad extends $.$ss_linkpad {
        typeLinks: Set<Link>;
        ui_id(id: string): string;
        guid(): Link_id;
        undef_guid(): string;
        Type_link_id(): string;
        Type_link(): $ss_linkpad_link_data;
        Contain_link(): $ss_linkpad_link_ui_id;
        Package_link(): $ss_linkpad_link_ui_id;
        Admin_link(): $ss_linkpad_link_ui_id;
        add_DEV(type_id: $ss_linkpad_link_id, name_or_val: string, parent_ui_id: $ss_linkpad_link_ui_id | null, node?: boolean): $ss_linkpad_link_ui_id;
        add_undef(name_or_val: string, parent_ui_id: $ss_linkpad_link_ui_id | null, node?: boolean): $ss_linkpad_link_ui_id;
        add_link(args: {
            from: $ss_linkpad_link_ui_id;
            link: $ss_linkpad_link_ui_id;
            pos?: number;
        }): void;
        add_new_link(args: {
            from: $ss_linkpad_link_ui_id;
            val?: string;
            pos?: number;
        }): $ss_linkpad_link;
        replace(args: {
            ui_id: $ss_linkpad_link_ui_id;
            new_id?: string;
            new_to?: string;
            new_type_id?: string;
        }): string | $ss_linkpad_link_ui_id | undefined;
        replace_to_link(args: {
            link: $ss_linkpad_link_ui_id;
            new_to: string;
        }): void;
        gql_path(): string;
        deep(): any;
        minilinks(data?: any[]): any;
        sync_deep(): any;
        ml(): any;
        default_data(): any[];
        deep_data(): any;
        nameL: (L: Link) => any;
        addL: (L: Link, parent_ui_id: $ss_linkpad_link_ui_id | null, node?: boolean) => $ss_linkpad_link_ui_id;
        sort_linksL: (A: Link, B: Link) => number;
        add_outL: (L: Link, from_ui_id: $ss_linkpad_link_ui_id, depth?: number, visited?: Set<string>) => void;
        right_link_id(next?: any): string;
        Admin_page(): $ss_linkpad_link;
        Package_page(id: $ss_linkpad_link_id): $ss_linkpad_link | null;
        Root_user_link(): $ss_linkpad_link;
        Root_package_link(): $ss_linkpad_link | null;
        pages(): readonly any[];
        auto(): void;
        all_link_ids(next?: any): readonly string[];
        upd_link_ids(id: string): void;
        Link_data(link_id: string, next?: $ss_linkpad_link_data): $ss_linkpad_link_data | null;
        link_data_by_ui_id(ui_id: $ss_linkpad_link_ui_id): $ss_linkpad_link_data | null;
        type_data_by_ui_id(ui_id: $ss_linkpad_link_ui_id): $ss_linkpad_link_data | null;
        link_links(ui_id: $ss_linkpad_link_ui_id): $ss_linkpad_link[];
    }
    export {};
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $ss_links extends $mol_book2 {
        title(): string;
        Placeholder(): any;
        submit_button(): readonly any[];
        editor_pages(id: any): readonly any[];
        Editor(id: any): $$.$ss_linkpad;
        Hide_contain(): $mol_check_box;
        opened_editor_pages(): readonly any[];
        pages(): readonly any[];
        submit(next?: any): any;
        Submit(): $mol_button_minor;
        demo(next?: any): any;
        Demo(): $mol_button_minor;
        opened_path(next?: any): string;
        hide_contain(next?: any): boolean;
        raw_gql_path(next?: any): string;
        Gql_path(): $$.$mol_string;
        Gql_path_field(): $$.$mol_form_field;
        Menu(): $mol_page;
    }
}

declare namespace $.$$ {
    class $ss_links extends $.$ss_links {
        opened_editor_pages(): readonly any[];
        raw_gql_path(next?: any): string;
        opened_path(): string;
    }
}

declare namespace $.$$ {
}

export = $;