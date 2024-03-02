import FeatureItem from "../../components/FeatureItem";

import imgChat from "../../assets/icon-chat.png";
import imgMoney from "../../assets/icon-money.png";
import imgSecurity from "../../assets/icon-security.png";

import "./Feature.scss";

function Feature(){
    return(
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem 
                imageSrc={imgChat} 
                title="You are our #1 priority" 
                description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem 
                imageSrc={imgMoney} 
                title="More savings means higher rates" 
                description="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem 
                imageSrc={imgSecurity} 
                title="Security you can trust" 
                description="We use top of the line encryption to make sure your data and money is always safe."
            />
        </section>
    );
};

export default Feature;