import { NavigationContainerRef, StackActions } from "@react-navigation/native";
import React from "react";

export const navRef = React.createRef<NavigationContainerRef<any>>() 

export function naviagte<T> (name: string, params?: T){
    navRef.current?.navigate(name, params);
}

export function goBack() {
    navRef.current?.goBack();
}

export function push<T>(name: string, params?: T) {
    navRef.current?.dispatch(StackActions.push(name, params as Object))
}

export function replace<T>(name: string, params?: T) {
    navRef.current?.dispatch(StackActions.replace(name, params as Object))
}

export function popBy(n?: number) {
    navRef.current?.dispatch(StackActions.pop(n));
}

export function popToTop() {
    navRef.current?.dispatch(StackActions.popToTop);
}

export function reset(index: number, name: string) {
    navRef.current?.reset({
        index,
        routes: [{name}]
    })
}