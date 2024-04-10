import React from 'react'

export default function SelectedContact({ contact }) {
    if (!contact) {
        return <div>No contact Selected</div>
    }
    const { address, company } = contact;
    const { street, suite, city, zipcode, geo } = address;
    const { lat, lng } = geo;
    const { bs } = company;
    
    return (
        <div>
        <h2>Contact Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Street</td>
              <td>{street}</td>
            </tr>
            <tr>
              <td>Suite</td>
              <td>{suite}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>Zipcode</td>
              <td>{zipcode}</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>{lat}</td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>{lng}</td>
            </tr>
            <tr>
              <td>Company BS</td>
              <td>{bs}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

