import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './css/SearchBar.css';
import data from './KoreanLatLon.json';
import { ChangeShi, ChangeDong, ChangeGoo } from '../../features/LocationInfo/LocationSlice';


// 검색 바
export default function SearchBar() {
    return (
        <div className="SearchContainer">
            <ShiOptions />
            <GooOptions />
            <DongOptions />
            <button><i className="bi bi-search"></i></button>
        </div>
    )
}


// 시 옵션
const ShiOptions = () => {
    const shi = new Set();
    data.forEach(item => shi.add(item.시));
    const arr = Array.from(shi);

    const dispatch = useDispatch();
    const change = (e) => {
        const val = e.target.value;
        changeInit(val);
        dispatch(ChangeShi(val));
        dispatch(ChangeGoo(null));
        dispatch(ChangeDong(null));
    }

    const [initValue, changeInit] = useState('대전광역시') 

    return (
        <select id="shi" name="shi" onChange={change} value={initValue}>
            {
                arr.map((v, i) => (
                    <option key={i} value={v}>
                        {v}
                    </option>
                ))
            }
        </select>
    )
}

 
// 구 옵션
const GooOptions = () => {
    const Shi = useSelector(state => {
        return state.ShiChange;
    })

    const dispatch = useDispatch();
    const change = (e) => {
        const val = e.target.value;
        dispatch(ChangeGoo(val));
        dispatch(ChangeDong(null));
    }

    let temp = [];
    let Goos = new Set();
    let [arr, changeArr] = useState([]);

    useEffect(() => {
        temp = [...data].filter((item) => {
            return item.시.indexOf(Shi) > -1;
        });
        temp.forEach(item => {
            Goos.add(item.구);
        });
        changeArr(Array.from(Goos).sort());
    }, [Shi]);


    return (
        <select id="goo" name="goo" onChange={change}>
            {
                arr.map((v, i) => (
                    <option key={i} value={v}>
                        {v}
                    </option>
                ))
            }
        </select>
    )
}


// 동 옵션
const DongOptions = () => {
    const Shi = useSelector(state => {
        return state.ShiChange;
    })

    const Goo = useSelector(state => {
        return state.GooChange;
    })
    const Dong = useSelector(state => {
        return state.DongChange;
    })

    const dispatch = useDispatch();
    const change = (e) => {
        const val = e.target.value;
        changeSelVal(val);
        dispatch(ChangeDong(val));
    }

    let temp = [];
    let Dongs = new Set();
    let [arr, changeArr] = useState([]);
    const [SelVal, changeSelVal] = useState('');

    useEffect(() => {
        temp = [...data].filter((item) => {
            return item.구 === Goo && item.시 === Shi;
        });
        temp.forEach(item => {
            Dongs.add(item.동);
        });
        changeArr(Array.from(Dongs).sort());

        console.log(Shi + Goo + Dong);
    }, [Goo, Dong]);


    return (
        <select id="Dong" name="Dong" onChange={change} value={SelVal}>
            {
                arr.map((v, i) => (
                    <option key={i} value={v}>
                        {v}
                    </option>
                ))
            }
        </select>
    )
}