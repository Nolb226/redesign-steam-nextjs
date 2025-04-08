import React from 'react'

import { cn } from '@/lib/utils'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

function ActiveProductDialog() {
    return (
        <Dialog>
            <DialogTrigger
                className={cn(
                    'block rounded-[0.1875rem] px-[29px] py-[13px] leading-[19px] text-text/main body-large hover:bg-color/secondary'
                )}
            >
                Active a Product
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-4 space-x-0 library-bg">
                <DialogHeader className="flex flex-col gap-4 space-x-0">
                    <DialogTitle className="heading-medium">
                        Enter your product code
                    </DialogTitle>
                    <DialogDescription className="body-large">
                        By entering your code you will be registering your
                        product with Steam adn adding it to your library. You
                        can enter a product code distributed with a retail
                        CD/DVD or other Steam product.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-0.5 body-small">
                    <p className="text-text/main">EXAMPLE PRODUCT CODES</p>
                    <p className="text-text/dim">
                        AAAAA-BBBBB-CCCCC AAAAA-BBBBB-CCCCC-DDDDD-EEEEE
                    </p>
                    <p className="text-text/dim">
                        AAAAA-BBBBB-CCCCC-DDDDD-EEEEE
                    </p>
                    <p className="text-text/dim">237ABCDGHJLPRST 23</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ActiveProductDialog
