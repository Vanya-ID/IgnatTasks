import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const loader = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    let dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(true))
        // dispatch
        // setTimeout
        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loader
                ? (
                    <div style={{
                        height: '55px'
                    }}>
                        <img style={{
                            height: '50px',
                            width: '50px'
                        } } src="https://clck.ru/VogSb" alt="Крутилка"/>
                    </div>
                ) : (
                    <div style={{
                height: '55px'
            }}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
