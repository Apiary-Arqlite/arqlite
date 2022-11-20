import React from 'react';
import infoIcon from '../images/info-icon.png';

export default function Calculator() {
  return (
    <div>
      <section class='calculator'>
        <form class='form'>
          <p>Calculate your hardware footprint for a post-consumer setup</p>
          <div>
            NUMBER sqft {/* footprint results will be calculated by equation */}
          </div>
          <p>Hardware footprint</p>
          <p>Recycling capacity</p>
          {/* number slider goes here 
      /* number slider controls recycling capacity */}
          <p>Tonnes of plastic per hour</p>
          <p class='form__title'>
            Calculate the impact of a multiple revenue stream process
          </p>
          <div>
            <label for='pFee'>Processing fee</label>
            <button>{/* info icon hover will go here */} info</button>
            <p>$</p>
            <div>
              <button>
                {/* drop down arrow will go here */}
                dropdown
              </button>
              <div id='dropdown' class='dropdown-list'>
                <p>10</p>
                <p>20</p>
                <p>30</p>
                <p>40</p>
                <p>50</p>
                <p>60</p>
                <p>70</p>
                <p>80</p>
                <p>90</p>
                <p>100</p>
              </div>
            </div>
          </div>
          <div>
            <label for='pCredits'>Plastic credits</label>
            <button>{/* info icon hover will go here */} info</button>
            <p>$</p>
            <button>dropdown</button>
            <div id='dropdown' class='dropdown-list'>
              <div>
                <p>10</p>
                <p>20</p>
                <p>30</p>
                <p>40</p>
                <p>50</p>
                <p>60</p>
                <p>70</p>
                <p>80</p>
                <p>90</p>
                <p>100</p>
              </div>
            </div>
          </div>
          <div>
            <label for='gRevenueBulk'>Gravel revenue bulk</label>
            <button>{/* info icon hover will go here */}info</button>
            <p>$</p>
            <button type=''>
              {/* drop down arrow will go here */}
              dropdown
            </button>
            <div id='dropdown' class='dropdown-list'>
              <div>
                <p>200</p>
                <p>300</p>
                <p>400</p>
                <p>500</p>
                <p>600</p>
              </div>
            </div>
          </div>

          <div>
            <label for='pRevenueBulk'>Pellets revenue bulk</label>
            <button>{/* info icon hover will go here */}info</button>
            <p>$</p>
            <button>
              {/* drop down arrow will go here */}
              dropdown
            </button>
            <div id='dropdown' class='dropdown-list'>
              <div>
                <p>900</p>
                <p>1000</p>
                <p>1200</p>
                <p>1400</p>
                <p>1600</p>
                <p>1800</p>
              </div>
            </div>
          </div>
          <div>
            <p for='tPM'>Total tons per month</p>
          </div>

          <div class='form__result'>
            {/* result will be calculate based on input */}
            <p>Total revenue: $1000</p>
          </div>
        </form>
      </section>
    </div>
  );
}
