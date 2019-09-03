{ amount:
   { total: '3240',
     currency: 'JPY',
     details:
      { subtotal: '3000',
        tax: '240',
        shipping: '0',
        insurance: '0',
        handling_fee: '0',
        shipping_discount: '0' } },
  payee:
   { merchant_id: 'UZ33PFYAXWXSN', email: 'sell@tmsmusic.tokyo' },
  description: 'tmShop',
  soft_descriptor: 'PAYPAL *SELLTMSMSTE',
  item_list:
   { items: [ [Object] ],
     shipping_address:
      { recipient_name: 'tmsm buy',
        line1: 'Nishi 4-chome, Kita 55-jo, Kita-ku',
        city: 'Shibuya-ku',
        state: 'Tokyo',
        postal_code: '150-0002',
        country_code: 'JP' } },
related_resources: [ { sale: [Object] } ] }


{ sale:
   { id: '05982759MA193542Y',
     state: 'completed',
     amount: { total: '3240', currency: 'JPY', details: [Object] },
     payment_mode: 'INSTANT_TRANSFER',
     protection_eligibility: 'ELIGIBLE',
     protection_eligibility_type: 'ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE',
     transaction_fee: { value: '157', currency: 'JPY' },
     parent_payment: 'PAYID-LVPHM2Q9MJ12359G77280639',
     create_time: '2019-08-22T11:03:22Z',
     update_time: '2019-08-22T11:03:22Z',
     links: [ [Object], [Object], [Object] ],
     soft_descriptor: 'PAYPAL *SELLTMSMSTE' } }
