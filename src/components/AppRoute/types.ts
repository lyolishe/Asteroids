import { ReactNode } from 'react';
import { RouteProps } from 'react-router';

interface Indexed<T = any> {
    [x: string]: T;
}

export type Props = RouteProps & {
    componentProps?: Indexed;
    component: ReactNode;
};
