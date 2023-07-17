import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-container">
            <div className="sidebar-content">
                <NavLink to='student/register'>
                    <h4>Students Registration</h4>
                </NavLink>
            </div>
            <div className="sidebar-content">
                <NavLink to='fee-submission'>
                    <h4>Online Fee Submission</h4>
                </NavLink>
            </div>
            <div className="sidebar-content">
                <NavLink to='enquires'>
                    <h4>Admission Enquiries</h4>
                </NavLink>
            </div>
            <div className="sidebar-content">
                <NavLink to='student-zone'>
                    <h4>Students Zone</h4>
                </NavLink>
            </div>
            <div className="sidebar-content">
                <NavLink to='staff-reg'>
                    <h4>Staff Registration</h4>
                </NavLink>
            </div>
            <div className="sidebar-content">
                <NavLink to='student/results'>
                    <h4>Exams Results</h4>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
