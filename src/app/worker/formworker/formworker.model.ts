        
        export interface BasicInformation 
        {
            facebookid: string;
            phone: string;
            MilesWantToDrive: number;
            Street: string;
            city: string;
            State: string;
            country: string;
            Zipcode: string;
        }

        export interface SkillsPaymentOptions 
        {
            facebookid: string;
            SkillIds: Array<number>;
            paymentType: string;
            billingAddress: string;
        }


        export interface WorkerEmployerInformation 
        {
            facebookid: string;
            phone: number;
            email: string;
            name: string;
            availability: string;
        }

        export interface WorkerSchedule 
        {
            facebookid: string;
            SkillIds: Array<number>;
            paymentType: string;
            billingAddress: string;
        }


