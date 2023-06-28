import React, { useState } from 'react';
import Time from '../Components/Layout/Time';
import Navbar from '../Components/Layout/Navbar';
import './BMI.css'; // Import the CSS file for styling

const BMI = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [bmi, setBMI] = useState('');
    const [meaning, setMeaning] = useState('');
    const [note, setNote] = useState('please input weight and height');

    const updateHeight = () => {
        const feetValue = parseFloat(feet);
        const inchesValue = parseFloat(inches);
        if (!isNaN(feetValue) && !isNaN(inchesValue)) {
            const cm = feetValue * 30.48 + inchesValue * 2.54;
            setHeight(cm.toFixed(2));
        }
    };

    const calculateBMI = () => {
        const weightValue = parseFloat(weight);
        const heightValue = parseFloat(height);
        const bmiValue = weightValue / ((heightValue / 100) * (heightValue / 100));
        const totalBMI = bmiValue.toFixed(2);
        setBMI(totalBMI);

        if (totalBMI < 18.5) {
            setMeaning('underweight');
        } else if (totalBMI <= 24.9) {
            setMeaning('normal or healthy');
        } else if (totalBMI <= 29.9) {
            setMeaning('overweight');
        } else {
            setMeaning('');
        }
    };

    const clearFields = () => {
        setWeight('');
        setHeight('');
        setFeet('');
        setInches('');
        setNote('please input weight and height');
    };

    const resetForm = () => {
        setNote('please input weight and height');
        setWeight('');
        setHeight('');
        setBMI('');
        setMeaning('');
        setFeet('');
        setInches('');
    };

    return (
        <>
            <Time />
            <Navbar />
            <div className="container-fluid">
                <div className="row mb-2 mt-2">
                    <div className="border pb-2 form col-lg-6 col-md-8 col-sm-10 col-12 mx-auto text-dark" style={{ boxShadow: "2px 2px 10px silver", borderRadius: "10px" }}>
                        <h1 style={{textAlign:'center'}}>Calculate BMI</h1>

                        <div className="row">
                            <div className="col-sm-6">
                                <h5>Weight (kg)</h5>
                                <input
                                    type="text"
                                    placeholder="Enter weight in kg"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    size="15"
                                    name="weight"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="d-flex cm mt-2 mb-2 justify-content-around">
                                    <p className="ft">Feet</p>
                                    <input
                                        type="text"
                                        placeholder="Feet"
                                        size="3"
                                        value={feet}
                                        onChange={(e) => setFeet(e.target.value)}
                                        id="ft"
                                        onBlur={updateHeight}
                                    />
                                    <p className="in">Inch</p>
                                    <input
                                        className="inbox"
                                        type="text"
                                        placeholder="Inch"
                                        size="3"
                                        value={inches}
                                        onChange={(e) => setInches(e.target.value)}
                                        id="in"
                                        onBlur={updateHeight}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <h5>Height (cm)</h5>
                                <input
                                    type="text"
                                    placeholder="Height in cm"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    id="h"
                                    size="15"
                                    name="height"
                                />
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-6 mt-2">
                                <button className="btn btn-success" onClick={calculateBMI}>
                                    Calculate
                                </button>
                            </div>
                            <div className="col-sm-6 mt-2">
                                <button className="btn btn-danger" onClick={clearFields}>
                                    Clear
                                </button>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-6 mt-2">
                                <h5 className="mt-2">Your BMI</h5>
                                <input type="text" name="bmi" size="15" id="BMI" value={bmi} disabled />
                            </div>
                            <div className="col-sm-6 mt-3">
                                <h5>This Means</h5>
                                <input type="text" name="meaning" size="20" id="note" value={meaning} disabled />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <button className="btn btn-danger reset mt-2" onClick={resetForm}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BMI;
