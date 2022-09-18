import React from 'react'
import './MainContent.scss'
export default function MainContent() {
    const item = [
        {engine: 'Gecko', browser: 'Firefox 1.0', platform:'Win 98+ / OSX.2+', version: '1.7', css: 'A'},
        {engine: 'Gecko', browser: 'Firefox 1.0', platform:'Win 98+ / OSX.2+', version: '1.8', css: 'A'},
        {engine: 'Gecko', browser: 'Firefox 2.0', platform:'Win 98+ / OSX.2+', version: '1.8', css: 'A'},
        {engine: 'Gecko', browser: 'Firefox 3.0', platform:'Win 2k+ / OSX.3+', version: '1.9', css: 'A'},
        {engine: 'Gecko', browser: 'Camino 1.0', platform:'OSX.2+', version: '1.8', css: 'A'},
        {engine: 'Gecko', browser: 'Camino 1.5', platform:'OSX.3+', version: '1.8', css: 'A'},
        {engine: 'Gecko', browser: 'Nestcape 7.2', platform:'Win 95+ / Mac OS 8.6-9.2', version: '1.7', css: 'A'},
        {engine: 'Gecko', browser: 'Netscape Navigator 8', platform:'Win 98SE+', version: '1.7', css: 'A'},
        {engine: 'Gecko', browser: 'Netscape Navigator 9', platform:'Win 98+ / OSX.2+', version: '1.8', css: 'A'},
        {engine: 'Gecko', browser: 'Mozilla 1.0', platform:'Win 95+ / OSX.1+', version: '1', css: 'A'}
    ]
    const Page = (props => {
        const {tagA, title} = props
        return (
            <li >
                <a href='#' role='button' className={tagA}>{title}</a>
            </li>
        )
    })
    const renderItem = (item, index) => {
        return (
            <tr key = {index}>
                <td>{item.engine}</td>
                <td>{item.browser}</td>
                <td>{item.platform}</td>
                <td>{item.version}</td>
                <td>{item.css}</td>
            </tr>
        )
    }
    return (
        <div className='box'>
            <div className='box-title'>Hover Data Table</div>
            <div className='box-body'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.map(renderItem)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className='page'>
                <div className='dataTables-info'>Showing 1 to 10 of 57 entries</div>
                <div className='page-number'>
                    <ul className='pagination'>
                        <Page title='Previous'/>
                        <Page tagA='active' title='1'/>
                        <Page title='2'/>
                        <Page title='3'/>
                        <Page title='4'/>
                        <Page title='5'/>
                        <Page title='6'/>
                        <Page title='Next'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

