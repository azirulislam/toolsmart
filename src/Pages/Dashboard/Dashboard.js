import React from 'react';

const Dashboard = () => {
    return (
        <div class="drawer">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
          <label for="my-drawer" class="btn btn-primary mt-24 drawer-button">Open Dashboard</label>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                      <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;