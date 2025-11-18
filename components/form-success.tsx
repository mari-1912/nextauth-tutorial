import { ShieldCheck } from 'lucide-react'


interface FormSuccessProps {
    message?: string;
}   

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null;  
    return (
        <div className="bg-chart-2/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-chart-2">
            <ShieldCheck className="h-4 w-4" />
            <span>{message}</span>
        </div>
    );  
}