import { z } from 'zod';

export const BidderSchema = z.object({
    name: z.string(),
    username: z.string(),
    password: z.string().min(8, 'Password must be at least 8 characters long').max(32, 'Password must be at most 32 characters long').min(1),
    email: z.string().email('Invalid email format'),
    phoneNo: z.string().refine((value) => value.length === 10, { message: 'Phone number must be 10 digits long' }),
    address: z.string(),
    idType: z.string(),
    govId: z.string(),
    purchasedItems: z.array(z.string()), // Assuming purchasedItems are IDs of Items
    cardType: z.string(),
    cardNo: z.number().int(),
    expiryDate: z.string(), // You might want to use a specific date format or a Date type here
    cardHolderName: z.string(),
    ifsc: z.string(),
    bankName: z.string(),
    pancardId: z.string(),
});


export type Bidder = z.infer<typeof BidderSchema>;
