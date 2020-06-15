import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo.png';
import '../../scss/sidebar.scss';

const navData = ['Resume', 'Todo List', 'PomodoroTimer', 'Search(API)'];

const Sidebar = () => {

    const [documentHeight, setDocumentHeight] = useState(document.documentElement.clientHeight);

    useEffect(() => {
        window.addEventListener('load', () => {
            setDocumentHeight(document.body.scrollHeight);
        })
    })

    return (
        <div className="sidebar_wrapper" style={{ height: documentHeight - 0.1 + 'px' }}>
            <div className="sidebar">
                <div className="photo">
                    <img src={Logo} alt="isME"></img>
                </div>
                <div className="title">
                    <h2>Daniel's</h2>
                    <p>-Portfolio-</p>
                </div>
                <div className="nav">
                    <ul>
                        {navData.map((item, i) => {
                            return <li key={i}>
                                <button>{item}</button>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="remarks">
                    <p>一個立志成為</p>
                    <p>前端大師的北漂兒</p>
                    <p>在此用高雄的溫度</p>
                    <p>來寫下對於前端的熱情</p>
                    <p>（～￣▽￣～）</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;