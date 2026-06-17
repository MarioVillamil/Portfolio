import { Button } from "@/components/ui/button"
export default function CvSection(){
    return(
        <div id="cv" className="flex  items-center"  >
        <a href="/MarioCv.pdf" target="_blank" rel="noopener noreferrer">
        <Button className="mt-2" size="lg">
            Get my resume 
        </Button>
        </a>
        </div>
       
    )
}