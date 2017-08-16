        
        export class BasicInformation 
        {
            facebookid: string;
            phone: string;
            MilesWantToDrive: number;
            Street: string;
            city: string;
            State: string;
            country: string;
            Zipcode: string;

            constructor(){
                this.facebookid = '';
                this.phone = '';
                this.MilesWantToDrive = 0;
                this.Street = '';
                this.city = '';
                this.State = '';
                this.country = '';
                this.Zipcode = '';    
            }
        }

        export class SkillsPaymentOptions 
        {
            facebookid: string;
            SkillIds: Array<any>;
            paymentType: string;
            constructor(){
                this.facebookid = '';
            this.paymentType = '';
            }
        }


        export class WorkerEmployerInformation 
        {
            facebookid: string;
            phone: number;
            email: string;
            name: string;
            availability: string;
            constructor(){
                this.facebookid ='';
            this.phone = 0;
            this.email = '';
            this.name = '';
            this.availability ='';
            }
        }

        export class WorkerSchedule 
        {
            facebookid: string;
            SkillIds: Array<number>;
            paymentType: string;
            billingAddress: string;
        }


