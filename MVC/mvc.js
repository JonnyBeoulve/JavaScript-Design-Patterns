/*========================================================================
// This MVC design pattern example will demonstrate the purpose of the
// Model, View, and Controller elements of the pattern using a
// fictional data structure containing a SpaceX flight record.
========================================================================*/
// The Model contains the underlying, logical structure of data for a system. In many cases
// it manifests itself as a database, but in this example we create a flat data structure 
// containing a variety of information about SpaceX's 59th mission.
let M = {
    data: {
        flightNumber: 59,
        missionName: 'CRS-14',
        launchYear: '2018',
        telemetry: 'https://www.flightclub.io/results/?code=CR14',
        missionPatch: 'https://images2.imgbox.com/4c/3a/VGGRo5PT_o.png',
        missionDetails: 'The launch used a refurbished booster (from CRS-12) for the 11th time, and a refurbished capsule (C110 from CRS-8) for the third time. External payloads include a materials research platform MISSE-FF phase 3 of the Robotic Refueling Mission TSIS, heliophysics sensor several crystallization experiments, and the RemoveDebris spacecraft aimed at space junk removal. The booster was expended in order to test a new landing profile.',
        launchSuccess: true
    },
    setData: (d) => {
        this.data.flightNumber = d.flightNumber;
        this.data.missionName = d.missionName;
        this.data.launchYear = d.launchYear;
        this.data.telemetry = d.telemetry;
        this.data.missionPatch = d.missionPatch;
        this.data.missionDetails = d.missionDetails;
        this.data.launchSuccess = d.launchSuccess;
    },
    getData: () => {
        return data;
    }
}

// The View is concerned with presenting information within the user interface. In this case,
// we create logic for selecting DOM elements and associate them with various elements
// of the Model.
let V = {
    flightNumber: document.querySelector('#flightNumber'),
    missionName: document.querySelector('#missionName'),
    launchYear: document.querySelector('#launchYear'),
    telemetry: document.querySelector('#telemetry'),
    missionPatch: document.querySelector('#missionPatch'),
    missionDetails: document.querySelector('#missionDetails'),
    launchSuccess: document.querySelector('#launchSuccess'),
    update: (M) => {
        this.flightNumber.value = M.data.flightNumber;
        this.missionName.value = M.data.missionName;
        this.launchYear.value = M.data.launchYear;
        this.telemetry.value = M.data.telemetry;
        this.missionPatch.value = M.data.missionPatch;
        this.missionDetails.value = M.data.missionDetails;
        this.launchSuccess.value = M.data.launchSuccess;
    }
}

// The Controller serves as a middle-man between the Model and View, communicating between
// data elements in the Model and actions performed in the View.
let C = {
    model: M,
    view: V,
    handler: () => {
        this.view.update(this.model);
    }
}