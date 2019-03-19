import React from 'react';
interface DockDataBase {
    minWidth?: number;
    minHeight?: number;
}
export interface BoxData extends DockDataBase {
    id?: string | number;
    parent?: BoxData;
    size?: number;
    mode?: 'horizontal' | 'vertical' | 'float';
    children: (BoxData | PanelData)[];
}
export interface TabGroup {
    floatable?: boolean;
    closable?: boolean;
    multiTabs?: boolean;
    tabLocked?: boolean;
    panelClass?: string;
}
export interface TabData extends DockDataBase {
    id?: string;
    parent?: PanelData;
    title: string;
    content: React.ReactNode | (() => React.ReactNode);
    group: TabGroup;
}
export interface PanelData extends DockDataBase {
    id?: string | number;
    parent?: BoxData;
    activeId: string;
    tabs: TabData[];
    group: TabGroup;
    size?: number;
    panelLocked?: boolean;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
}
export interface LayoutData {
    dockbox?: BoxData;
    floatbox?: BoxData;
}
export declare type DropDirection = 'L' | 'R' | 'B' | 'T' | 'BeforeTab' | 'AfterTab';
export interface DockContext {
    setDropRect(element: HTMLElement, direction?: DropDirection): void;
}
export declare function nextId(): number;
export declare const DockContextType: React.Context<DockContext>;
export declare const DockContextProvider: React.ProviderExoticComponent<React.ProviderProps<DockContext>>;
export declare const DockContextConsumer: React.ExoticComponent<React.ConsumerProps<DockContext>>;
export {};