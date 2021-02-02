import { FC } from 'react';

interface ComponentProps {
    title: string;
    id: string;
}

export type OwnProps = {
    someCustomRouteProp: string;
};

export interface StateProps {
    experimentId: string;
    mouseId: string;
}

export type Props = FC<StateProps & OwnProps> & ComponentProps;
