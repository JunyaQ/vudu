import React , { useState } from 'react';
import { Dropdown, DropdownButton, ButtonGroup, Form,Button } from 'react-bootstrap';
function FilterBtn(){
   
    const handleCheckboxChange = (event) => {
      console.log(event.target.id);
      };
      const handleFilter = (event) =>{
        console.log(event.target.id);
      }
    return(
        <div>
        <DropdownButton
        as={ButtonGroup}
        title="Filter"
        id="bg-vertical-dropdown-2"
      >
        <Dropdown.Item eventKey="Drama">
        <Form.Check 
          type="checkbox" 
          id="Drama" 
          label="Drama"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Sci-Fi">
        <Form.Check 
          type="checkbox" 
          id="Sci-Fi" 
          label="Sci-Fi"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Adventrue">
        <Form.Check 
          type="checkbox" 
          id="Adventrue" 
          label="Adventrue"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Action">
        <Form.Check 
          type="checkbox" 
          id="Action"  
          label="Action"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Animation">
        <Form.Check 
          type="checkbox" 
          id="Animation" 
          label="Animation"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Fantasy">
        <Form.Check 
          type="checkbox" 
          id="Fantasy" 
          label="Fantasy"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Family">
        <Form.Check 
          type="checkbox" 
          id="Family" 
          label="Family"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Comedy">
        <Form.Check 
          type="checkbox" 
          id="Comedy" 
          label="Comedy"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Musical">
        <Form.Check 
          type="checkbox" 
          id="Musical" 
          label="Musical"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Romance">
        <Form.Check 
          type="checkbox" 
          id="Romance" 
          label="Romance"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Horror">
        <Form.Check 
          type="checkbox" 
          id="Horror" 
          label="Horror"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Reality">
        <Form.Check 
          type="checkbox" 
          id="Reality" 
          label="Reality"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Mystery">
        <Form.Check 
          type="checkbox" 
          id="Mystery" 
          label="Mystery"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Sport">
        <Form.Check 
          type="checkbox" 
          id="Sport" 
          label="Sport"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Talk Show">
        <Form.Check 
          type="checkbox" 
          id="Talk Show" 
          label="Talk Show"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>

         <Dropdown.Item eventKey="Unknown">
        <Form.Check 
          type="checkbox" 
          id="Unknown" 
          label="Unknown"
          onChange={handleCheckboxChange} 
        />
         </Dropdown.Item>
{/*  */}
<Button variant="primary" onClick={handleFilter} className="ms-2">Apply</Button>
      </DropdownButton>
     
        </div>
    )
}

export default FilterBtn;