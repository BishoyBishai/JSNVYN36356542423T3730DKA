/**
 * InputForm Component
 * A reusable React component that encapsulates a form input field with a label and error message.
 */
import { FC, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";

interface IInputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}
const InputForm: FC<IInputFormProps> = ({
  label,
  register,
  error,
  ...inputProps
}) => {
  return (
    <div className="grid gap-2 py-2">
      <Label
        className={cn("text-left font-exo", {
          "text-red-500": error,
        })}
        htmlFor={register.name}
      >
        {label}
      </Label>
      <Input
        id={register.name}
        {...register}
        {...inputProps}
        className={cn("ont-handlee", {
          "border border-red-500 focus-visible:ring-red-500": error,
        })}
      />
      {error?.message && (
        <div className="text-red-500 text-xs text-left font-handlee">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default InputForm;
