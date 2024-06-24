import React from 'react'
import './OrderTrackProgressBar.css';

function OrderTrackProgressBar() {
  return (
    <div id="bar-progress" class="mt-5 mb-5 mt-lg-0">
        <div class="step step-active">
            <span class="number-container">
                                    <span class="number">1</span>
            </span>
            <h5>Accepted</h5><br></br>
            <span>Thu, Apr 21</span>
        </div>
        <div class="seperator"></div>
        <div class="step">
            <span class="number-container">
                                    <span class="number">2</span>
            </span>
            <h5>In Transit</h5>
        </div>
        <div class="seperator"></div>
        <div class="step">
            <span class="number-container">
                                    <span class="number">3</span>
            </span>
            <h5>Out for Delivery</h5>
        </div>
        <div class="seperator"></div>
        <div class="step">
            <span class="number-container">
                                    <span class="number">4</span>
            </span>
            <h5>Delivered</h5><br></br>
            <span>Sat, Apr 23</span>
        </div>
    </div>
  )
}

export default OrderTrackProgressBar