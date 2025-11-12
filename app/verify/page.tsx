"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import http from '@/lib/http';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {

    const params = useSearchParams();
    const token = params.get("token");
    const router = useRouter();
    const verifyEmail = async() => {
      const response = await http.post(`/auth/verify/mail?token=${token}`);
      return response.data;
    }
    const verifyMutation = useMutation({
      mutationFn: verifyEmail,
    })

    const onClick = async () => {
      if(verifyMutation.isPending) return;
      try {
        const result = await verifyMutation.mutateAsync();
        console.log(result);
        router.push("/login");
      } catch(error) {

      }
    }
  return (
    <div className='flex justify-center'>
      <Card className='mt-2'>
        <CardContent>
          <p className='text-4xl'>Verify your email</p>
        </CardContent>
        <CardFooter>
          <div className='flex justify-end w-full'>
            <Button onClick={onClick}>Verify</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default page