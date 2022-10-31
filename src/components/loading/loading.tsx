import {
    ForwardRefRenderFunction,

} from "react";
import ReactLoading, { LoadingProps as ReactLoadingProps } from 'react-loading';


interface BaseLoadingProps extends ReactLoadingProps {

}

export type LoadingProps = BaseLoadingProps;

const Loading: ForwardRefRenderFunction<unknown, LoadingProps> = (props, ref) => {

    return <ReactLoading  {...props} />;
};

export default Loading;