/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DemoLabel {
        "lastname": string;
        "value": string;
    }
    interface DemoProps {
        "age": number;
        "city": string;
        "country": string;
        "province": string;
    }
    interface DemoSwitcher {
        "buttonNames": string[];
        "label": string;
    }
    interface DemoText {
        "lastname": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLDemoLabelElement extends Components.DemoLabel, HTMLStencilElement {
    }
    var HTMLDemoLabelElement: {
        prototype: HTMLDemoLabelElement;
        new (): HTMLDemoLabelElement;
    };
    interface HTMLDemoPropsElement extends Components.DemoProps, HTMLStencilElement {
    }
    var HTMLDemoPropsElement: {
        prototype: HTMLDemoPropsElement;
        new (): HTMLDemoPropsElement;
    };
    interface HTMLDemoSwitcherElement extends Components.DemoSwitcher, HTMLStencilElement {
    }
    var HTMLDemoSwitcherElement: {
        prototype: HTMLDemoSwitcherElement;
        new (): HTMLDemoSwitcherElement;
    };
    interface HTMLDemoTextElement extends Components.DemoText, HTMLStencilElement {
    }
    var HTMLDemoTextElement: {
        prototype: HTMLDemoTextElement;
        new (): HTMLDemoTextElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "demo-label": HTMLDemoLabelElement;
        "demo-props": HTMLDemoPropsElement;
        "demo-switcher": HTMLDemoSwitcherElement;
        "demo-text": HTMLDemoTextElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface DemoLabel {
        "lastname"?: string;
        "value"?: string;
    }
    interface DemoProps {
        "age"?: number;
        "city"?: string;
        "country"?: string;
        "province"?: string;
    }
    interface DemoSwitcher {
        "buttonNames"?: string[];
        "label"?: string;
    }
    interface DemoText {
        "lastname"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "demo-label": DemoLabel;
        "demo-props": DemoProps;
        "demo-switcher": DemoSwitcher;
        "demo-text": DemoText;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "demo-label": LocalJSX.DemoLabel & JSXBase.HTMLAttributes<HTMLDemoLabelElement>;
            "demo-props": LocalJSX.DemoProps & JSXBase.HTMLAttributes<HTMLDemoPropsElement>;
            "demo-switcher": LocalJSX.DemoSwitcher & JSXBase.HTMLAttributes<HTMLDemoSwitcherElement>;
            "demo-text": LocalJSX.DemoText & JSXBase.HTMLAttributes<HTMLDemoTextElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
