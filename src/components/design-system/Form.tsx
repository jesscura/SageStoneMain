/**
 * SageStone Design System - Form Components
 * 
 * Naming Convention: Form/[Component]/[State]
 * Components: Input, Textarea, Select, SubmitButton
 * States: Default, Focused, Error, Disabled
 * 
 * Features:
 * - Accessible form controls
 * - Consistent styling
 * - Error states with messages
 */

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';
import { cn } from '../ui/utils';

// Form/Input - Text input field
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, helperText, id, required, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="space-y-2">
        {/* Label */}
        {label && (
          <label htmlFor={inputId} className="block text-[#1C1B20]">
            {label}
            {required && <span className="text-[#FF72E1] ml-1" aria-label="required">*</span>}
          </label>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'border border-[#E7E2EE] bg-[#F3E8FF]/30',
            'text-[#1C1B20] placeholder:text-[#9B98A3]',
            'transition-all duration-200',
            'focus:border-[#B14EFF] focus:ring-2 focus:ring-[#B14EFF]/20 focus:outline-none',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        />

        {/* Error Message */}
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {/* Helper Text */}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-sm text-[#6D6A73]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

// Form/Textarea - Multi-line text input
interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, error, helperText, id, required, rows = 4, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="space-y-2">
        {/* Label */}
        {label && (
          <label htmlFor={textareaId} className="block text-[#1C1B20]">
            {label}
            {required && <span className="text-[#FF72E1] ml-1" aria-label="required">*</span>}
          </label>
        )}

        {/* Textarea */}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'border border-[#E7E2EE] bg-[#F3E8FF]/30',
            'text-[#1C1B20] placeholder:text-[#9B98A3]',
            'transition-all duration-200',
            'focus:border-[#B14EFF] focus:ring-2 focus:ring-[#B14EFF]/20 focus:outline-none',
            'resize-none',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        />

        {/* Error Message */}
        {error && (
          <p id={`${textareaId}-error`} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {/* Helper Text */}
        {helperText && !error && (
          <p id={`${textareaId}-helper`} className="text-sm text-[#6D6A73]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

// Form/Select - Dropdown select
interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: Array<{ value: string; label: string }>;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, label, error, helperText, options, id, required, ...props }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="space-y-2">
        {/* Label */}
        {label && (
          <label htmlFor={selectId} className="block text-[#1C1B20]">
            {label}
            {required && <span className="text-[#FF72E1] ml-1" aria-label="required">*</span>}
          </label>
        )}

        {/* Select */}
        <select
          ref={ref}
          id={selectId}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'border border-[#E7E2EE] bg-[#F3E8FF]/30',
            'text-[#1C1B20]',
            'transition-all duration-200',
            'focus:border-[#B14EFF] focus:ring-2 focus:ring-[#B14EFF]/20 focus:outline-none',
            'cursor-pointer',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Error Message */}
        {error && (
          <p id={`${selectId}-error`} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {/* Helper Text */}
        {helperText && !error && (
          <p id={`${selectId}-helper`} className="text-sm text-[#6D6A73]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';

// Form/SubmitButton - Form submission button
interface FormSubmitButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
}

const FormSubmitButton = forwardRef<HTMLButtonElement, FormSubmitButtonProps>(
  ({ className, isLoading = false, loadingText = 'Submitting...', fullWidth = true, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="submit"
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'px-8 py-4 rounded-xl',
          'min-w-[44px] min-h-[44px]',
          'bg-gradient-to-r from-[#B14EFF] via-[#8E3AFF] to-[#E055FF]',
          'text-white',
          'shadow-[0_4px_14px_0_rgba(177,78,255,0.39)]',
          'transition-all duration-200',
          'hover:shadow-[0_6px_20px_rgba(177,78,255,0.5)]',
          'hover:brightness-[1.08]',
          'active:scale-[0.98]',
          'active:brightness-100',
          'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8E3AFF]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span>{isLoading ? loadingText : children}</span>
      </button>
    );
  }
);

FormSubmitButton.displayName = 'FormSubmitButton';

export { FormInput, FormTextarea, FormSelect, FormSubmitButton };
export type { FormInputProps, FormTextareaProps, FormSelectProps, FormSubmitButtonProps };
