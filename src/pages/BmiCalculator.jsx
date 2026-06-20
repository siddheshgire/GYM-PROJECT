import React, { useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import GetInTouch from '../components/sections/GetInTouch';
import Button from '../components/ui/Button';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault();
    
    const h = parseFloat(height);
    const w = parseFloat(weight);
    
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      alert('Please enter valid height and weight values.');
      return;
    }

    // BMI Formula = weight(kg) / height(m)^2
    const heightInMeters = h / 100;
    const computedBmi = w / (heightInMeters * heightInMeters);
    const bmiFixed = computedBmi.toFixed(1);
    
    setBmiResult(bmiFixed);

    // Set Status
    let status = '';
    if (computedBmi < 18.5) {
      status = 'Underweight';
    } else if (computedBmi >= 18.5 && computedBmi < 25) {
      status = 'Healthy';
    } else if (computedBmi >= 25 && computedBmi < 30) {
      status = 'Overweight';
    } else {
      status = 'Obese';
    }
    setBmiStatus(status);
  };

  const clearForm = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setSex('');
    setBmiResult(null);
    setBmiStatus('');
  };

  // Helper check to highlight the reference table row
  const getRowClass = (statusName) => {
    if (bmiStatus === statusName) {
      return 'bg-primary/20 text-white font-bold border-l-4 border-primary scale-[1.01] transition-all duration-300';
    }
    return 'hover:bg-neutral-900/40 text-neutral-400';
  };

  return (
    <main className="overflow-x-hidden">
      <Breadcrumb title="BMI calculator" parentName="Pages" parentPath="#" />

      <section className="bg-darkBg py-24 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Chart Column */}
            <div>
              <div className="mb-8">
                <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
                  Check your body
                </span>
                <h2 className="text-white font-oswald text-3xl font-extrabold uppercase tracking-wider">
                  BMI Calculator Chart
                </h2>
              </div>

              {/* Reference Table */}
              <div className="overflow-x-auto shadow-xl">
                <table className="w-full text-left border-collapse border border-neutral-900">
                  <thead>
                    <tr className="bg-neutral-950 border-b border-neutral-900 text-white font-oswald text-xs uppercase tracking-wider">
                      <th className="py-5 px-6 font-bold">BMI Index</th>
                      <th className="py-5 px-6 font-bold">Weight Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-900 text-sm">
                    <tr className={`${getRowClass('Underweight')} transition-all`}>
                      <td className="py-5 px-6 text-primary font-semibold font-oswald text-sm">Below 18.5</td>
                      <td className="py-5 px-6">Underweight</td>
                    </tr>
                    <tr className={`${getRowClass('Healthy')} transition-all`}>
                      <td className="py-5 px-6 text-primary font-semibold font-oswald text-sm">18.5 - 24.9</td>
                      <td className="py-5 px-6 font-medium">Healthy</td>
                    </tr>
                    <tr className={`${getRowClass('Overweight')} transition-all`}>
                      <td className="py-5 px-6 text-primary font-semibold font-oswald text-sm">25.0 - 29.9</td>
                      <td className="py-5 px-6">Overweight</td>
                    </tr>
                    <tr className={`${getRowClass('Obese')} transition-all`}>
                      <td className="py-5 px-6 text-primary font-semibold font-oswald text-sm">30.0 and Above</td>
                      <td className="py-5 px-6">Obese</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-darkBg-light p-8 sm:p-12 shadow-2xl border border-neutral-900">
              <div className="mb-8">
                <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
                  Check your body
                </span>
                <h2 className="text-white font-oswald text-3xl font-extrabold uppercase tracking-wider mb-4">
                  Calculate Your BMI
                </h2>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>

              {/* BMI Output Banner */}
              {bmiResult && (
                <div className="mb-8 bg-neutral-900 p-6 border-l-4 border-primary text-left flex justify-between items-center animate-fadeIn">
                  <div>
                    <span className="text-xs uppercase text-neutral-500 font-bold tracking-wider">Your Calculated BMI</span>
                    <h3 className="text-white font-oswald text-3xl font-bold mt-1">
                      {bmiResult} <span className="text-xs text-primary font-normal">kg/m²</span>
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase text-neutral-500 font-bold tracking-wider">Status Range</span>
                    <p className="text-primary font-oswald text-lg font-bold uppercase tracking-wide mt-1">
                      {bmiStatus}
                    </p>
                  </div>
                </div>
              )}

              {/* Form Input fields */}
              <form onSubmit={calculateBmi} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="number"
                    required
                    min="50"
                    max="280"
                    placeholder="Height / cm"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 px-5 py-3.5 focus:border-primary focus:outline-none transition-colors"
                  />
                  <input
                    type="number"
                    required
                    min="10"
                    max="400"
                    placeholder="Weight / kg"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 px-5 py-3.5 focus:border-primary focus:outline-none transition-colors"
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 px-5 py-3.5 focus:border-primary focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Sex"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 px-5 py-3.5 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-primary text-white font-oswald text-xs font-semibold uppercase tracking-wider py-4 hover:bg-primary-hover transition-colors"
                  >
                    Calculate
                  </button>
                  {bmiResult && (
                    <button
                      type="button"
                      onClick={clearForm}
                      className="px-6 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 font-oswald text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      <GetInTouch />
    </main>
  );
};

export default BmiCalculator;
