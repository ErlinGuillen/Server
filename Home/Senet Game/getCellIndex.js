function getCellIndex(displayIdx) {
            // Converts 1-30 into the visual grid positions
            if (displayIdx <= 10) return displayIdx - 1; 
            if (displayIdx <= 20) return 20 - (displayIdx - 10); // Reverse middle row
            return displayIdx - 1;
        }