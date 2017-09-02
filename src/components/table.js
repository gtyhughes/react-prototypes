import React from 'react';

export default (props) => {
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Smith</td>
                    <td>Math</td>
                    <td>99</td>
                </tr>
                <tr>
                    <td>Carter Johnson</td>
                    <td>Science</td>
                    <td>91</td>
                </tr>
                <tr>
                    <td>Jeff Cann</td>
                    <td>English</td>
                    <td>71</td>
                </tr>
            </tbody>
        </table>
    );
}