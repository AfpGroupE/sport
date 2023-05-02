import React from "react";
import GymPreis from './price.component';
import { models } from './pricelistText';

const GymPreisList = () => {
    
    const PreisComponents = models.map(
        (model) => {
            return (
                <GymPreis                
                textFirst={model.textFirst} 
                textSecond={model.textSecond} 
                preisHuf={model.preisHuf} />
            )
        }
    );
    return (
        <div>
            {PreisComponents}
        </div>
    )
}

export default GymPreisList