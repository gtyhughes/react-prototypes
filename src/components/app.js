import React from 'react';
import Table from './table'

const students = [
    {
        student: 'John Smith',
        course: 'Math',
        grade: '78'
    },
    {
        student: 'James Carter',
        course: 'Science',
        grade: '98'
    },
    {
        student: 'Austin Grody',
        course: 'English',
        grade: '56'
    }
]
export default () => {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table/>
        </div>
    )
}

