'use strict';
class ToolsControl {
    constructor(map, AMap) {
        this.map = map;
        this.AMap = AMap;

        this.scale = new this.AMap.Scale({
            visible: false
        });
        this.toolBar = new AMap.ToolBar({
            visible: false
        });
        this.overView = new AMap.OverView({
            visible: false
        });
        this.map.addControl(this.scale);
        this.map.addControl(this.toolBar);
        this.map.addControl(this.overView);
    }

    toggleScale(val) {
        if (val) {
            console.log(val);
            this.scale.show();
        } else {
            this.scale.hide();
        }
    }
    toggleToolBar(val) {
        if (val) {
            this.showToolBar();
            this.showToolBarDirection();
            this.showToolBarRuler();
        } else {
            this.hideToolBar();
            this.hideToolBarDirection();
            this.hideToolBarRuler();
        }
    }
    toggleToolBarDirection(val) {
        if (val) {
            this.toolBar.showDirection()
        } else {
            this.toolBar.hideDirection()
        }
    }
    toggleToolBarRuler(val) {
        if (val) {
            this.toolBar.showRuler();
        } else {
            this.toolBar.hideRuler();
        }
    }
    toggleOverViewShow(val) {
        if (val) {
            this.overView.show();
            this.document.getElementById('overViewOpen').disabled = false;
        } else {
            this.overView.hide();
            this.document.getElementById('overViewOpen').disabled = true;
        }
    }
    toggleOverViewOpen(val) {
        if (val) {
            this.overView.open();
        }
        else {
            this.overView.close();
        }
    }
    
    showToolBar() {
        document.getElementById('toolBar').checked = true;
        document.getElementById('toolBarDirection').disabled = false;
        document.getElementById('toolBarRuler').disabled = false;
        this.toolBar.show();
    }
    hideToolBar() {
        document.getElementById('toolBar').checked = false;
        document.getElementById('toolBarDirection').disabled = true;
        document.getElementById('toolBarRuler').disabled = true;
        this.toolBar.hide();
    }
    showToolBarDirection() {
        document.getElementById('toolBarDirection').checked = true;
        this.toolBar.showDirection();
    }
    hideToolBarDirection() {
        document.getElementById('toolBarDirection').checked = false;
        this.toolBar.hideDirection();
    }
    showToolBarRuler() {
        document.getElementById('toolBarRuler').checked = true;
        this.toolBar.showRuler();
    }
    hideToolBarRuler() {
        document.getElementById('toolBarRuler').checked = false;
        this.toolBar.hideRuler();
    }
}
export default ToolsControl;