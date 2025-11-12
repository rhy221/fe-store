"use client";
import React from 'react'
import { useSendVerifyEmailMutation } from "@/app/queries/useAuth";
import { Button } from "@/components/ui/button";
import { useRegisterStore } from "@/stores/useRegisterStore";
import { SendVerifyEmailBodyType } from "@/app/schema/auth.schema";
export default function VerifyEmailPage() {
    const { email } = useRegisterStore();
    const sendVerifyEmailMutation =  useSendVerifyEmailMutation();
    
    const onClick = async () => {
        if(sendVerifyEmailMutation.isPending) return;
        try{
        const result = await sendVerifyEmailMutation.mutateAsync({email: email});
        console.log(result);
         } catch (error) {
      console.log(error);
    }
    }
    return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold">Verify email has been sent to your <strong>{email}</strong></h2>
      <Button onClick={onClick}>
        Send Again
      </Button>
    </div>
  );
}