export const SvgIcon = ({icon}) => {
	switch(icon) {
		case 'home': 
		return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M9.73037 2.78823C11.0004 1.77923 12.7804 1.73923 14.0894 2.66823L14.2504 2.78823L20.3394 7.65923C21.0094 8.17823 21.4204 8.94923 21.4904 9.78823L21.5004 9.98923V18.0982C21.5004 20.1882 19.8494 21.8882 17.7804 21.9982H15.7904C14.8394 21.9792 14.0704 21.2392 14.0004 20.3092L13.9904 20.1682V17.3092C13.9904 16.9982 13.7594 16.7392 13.4504 16.6882L13.3604 16.6782H10.6894C10.3704 16.6882 10.1104 16.9182 10.0704 17.2182L10.0604 17.3092V20.1592C10.0604 20.2182 10.0494 20.2882 10.0404 20.3382L10.0304 20.3592L10.0194 20.4282C9.90037 21.2792 9.20037 21.9282 8.33037 21.9892L8.20037 21.9982H6.41037C4.32037 21.9982 2.61037 20.3592 2.50037 18.2982V9.98923C2.50937 9.13823 2.88037 8.34823 3.50037 7.79823L9.73037 2.78823ZM13.3804 3.87823C12.6204 3.26823 11.5404 3.23923 10.7404 3.76823L10.5894 3.87823L4.50937 8.77923C4.16037 9.03823 3.95037 9.42823 3.90037 9.83823L3.88937 9.99823V18.0982C3.88937 19.4282 4.92937 20.5182 6.25037 20.5982H8.20037C8.42037 20.5982 8.61037 20.4492 8.63937 20.2392L8.66037 20.0592L8.67037 20.0082V17.3092C8.67037 16.2392 9.49037 15.3692 10.5404 15.2882H13.3604C14.4294 15.2882 15.2994 16.1092 15.3804 17.1592V20.1682C15.3804 20.3782 15.5304 20.5592 15.7304 20.5982H17.5894C18.9294 20.5982 20.0194 19.5692 20.0994 18.2582L20.1104 18.0982V9.99823C20.0994 9.56923 19.9204 9.16823 19.6104 8.86923L19.4804 8.75823L13.3804 3.87823Z" fill="#3B5162"/>
</svg>);
		case 'discount': return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13.9511 2.71645L14.1334 2.88645L14.8522 3.6052C15.0991 3.85092 15.4229 4.00242 15.7674 4.03646L15.9161 4.04378H16.9441C18.5479 4.04378 19.8594 5.29795 19.951 6.87883L19.9561 7.05578V8.08278C19.9561 8.43258 20.0767 8.76886 20.2943 9.03624L20.3934 9.14645L21.1122 9.86525C22.2437 10.9917 22.2943 12.7929 21.2577 13.98L21.1224 14.1251L20.3941 14.8535C20.1491 15.099 19.9975 15.4231 19.9634 15.7672L19.9561 15.9158V16.9448C19.9561 18.5485 18.702 19.8591 17.1211 19.9507L16.9441 19.9558H15.9161C15.5676 19.9558 15.2309 20.0769 14.9633 20.2951L14.8531 20.3945L14.1352 21.1113C13.01 22.2442 11.2074 22.2944 10.0199 21.2574L9.86577 21.1131L9.14866 20.396C8.90027 20.1494 8.57583 19.9973 8.23232 19.9631L8.0841 19.9558H7.0551C5.45197 19.9558 4.14083 18.7023 4.04922 17.1217L4.0441 16.9448V15.9158C4.0441 15.5678 3.92281 15.2308 3.70472 14.9637L3.60541 14.8537L2.88828 14.1356C1.7557 13.0094 1.70546 11.2068 2.74248 10.0204L2.87777 9.87545L3.60389 9.14834C3.85084 8.89963 4.00267 8.57581 4.03676 8.23146L4.0441 8.08278V7.05578L4.04922 6.87885C4.13744 5.35668 5.3566 4.13715 6.87824 4.0489L7.0551 4.04378H8.0841C8.43259 4.04378 8.76936 3.9229 9.0364 3.70572L9.14641 3.60682L9.86457 2.88765C10.9909 1.75618 12.7934 1.70636 13.9511 2.71645ZM11.0415 3.84256L10.9268 3.94674L10.2055 4.66899C9.6883 5.18258 9.00418 5.48966 8.28193 5.53727L8.0841 5.54378H7.0551C6.26754 5.54378 5.61982 6.14793 5.55028 6.91821L5.5441 7.05578V8.08278C5.5441 8.81195 5.27949 9.5131 4.80221 10.0612L4.6668 10.2067L3.93963 10.9349C3.38782 11.4892 3.35569 12.3649 3.84334 12.9589L3.9478 13.0738L4.66706 13.7941C5.18147 14.3097 5.48976 14.995 5.53756 15.7178L5.5441 15.9158V16.9448C5.5441 17.7328 6.14781 18.3801 6.91762 18.4496L7.0551 18.4558H8.0841C8.8119 18.4558 9.51365 18.7207 10.0618 19.198L10.2074 19.3335L10.9307 20.0568C11.489 20.6118 12.3649 20.6442 12.9584 20.1565L13.0731 20.0521L13.794 19.3322C14.3107 18.8179 14.9952 18.5101 15.7181 18.4623L15.9161 18.4558H16.9441C17.7328 18.4558 18.3804 17.8524 18.4499 17.0823L18.4561 16.9448V15.9158C18.4561 15.1869 18.7209 14.4839 19.1976 13.9383L19.3328 13.7935L20.0603 13.066C20.6121 12.511 20.644 11.6358 20.1571 11.0419L20.0528 10.9271L19.3309 10.2052C18.817 9.68765 18.5102 9.00422 18.4626 8.28094L18.4561 8.08278V7.05578C18.4561 6.26737 17.852 5.61951 17.0817 5.54996L16.9441 5.54378H15.9161C15.1869 5.54378 14.4849 5.27939 13.938 4.80243L13.7928 4.66711L13.1048 3.97734L13.065 3.94031C12.5107 3.38855 11.6348 3.35624 11.0415 3.84256ZM15.0965 14.0424C15.1665 14.1124 15.2265 14.1924 15.2665 14.2824C15.2965 14.3724 15.3165 14.4724 15.3165 14.5724C15.3165 14.6734 15.2965 14.7624 15.2665 14.8524C15.2265 14.9424 15.1665 15.0324 15.0965 15.1024C14.9565 15.2424 14.7665 15.3224 14.5665 15.3224C14.3665 15.3224 14.1765 15.2424 14.0365 15.1024C13.9665 15.0324 13.9165 14.9424 13.8765 14.8524C13.8365 14.7624 13.8165 14.6734 13.8165 14.5724C13.8165 14.4724 13.8365 14.3724 13.8765 14.2824C13.9165 14.1924 13.9665 14.1124 14.0365 14.0424C14.3165 13.7624 14.8165 13.7624 15.0965 14.0424ZM15.1001 8.89915C15.3664 9.16542 15.3906 9.58208 15.1728 9.87569L15.1001 9.95981L9.96013 15.0998C9.66724 15.3927 9.19237 15.3927 8.89947 15.0998C8.63321 14.8335 8.609 14.4169 8.82686 14.1233L8.89947 14.0392L14.0395 8.89915C14.3324 8.60626 14.8072 8.60626 15.1001 8.89915ZM9.9564 8.90278C10.0964 9.04178 10.1764 9.23278 10.1764 9.43278C10.1764 9.53278 10.1664 9.62178 10.1264 9.71278C10.0864 9.80278 10.0264 9.88278 9.9564 9.96278C9.8864 10.0328 9.8064 10.0818 9.7164 10.1218C9.6264 10.1618 9.5264 10.1828 9.4264 10.1828C9.3264 10.1828 9.2364 10.1618 9.1464 10.1218C9.0564 10.0818 8.9664 10.0328 8.8964 9.96278C8.8264 9.88278 8.7764 9.80278 8.7364 9.71278C8.6964 9.62178 8.6764 9.53278 8.6764 9.43278C8.6764 9.33178 8.6964 9.23278 8.7364 9.14278C8.7764 9.05278 8.8264 8.96278 8.8964 8.90278C9.1864 8.62178 9.6764 8.62178 9.9564 8.90278Z" fill="#3B5162"/>
		</svg>);
		case 'statistics': return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.4978 6.7606C10.5855 6.93485 10.6382 7.12392 10.6533 7.32102L11.0419 12.8095C11.0471 12.8847 11.0827 12.9548 11.1409 13.0042C11.1845 13.0413 11.2381 13.0645 11.298 13.0712L11.3599 13.0724L16.9341 12.7366C17.3867 12.71 17.8305 12.8675 18.1604 13.1719C18.4902 13.4763 18.6768 13.9004 18.6744 14.3912C18.4265 18.0037 15.773 21.0237 12.159 21.8065C8.54503 22.5893 4.83611 20.9474 3.05781 17.7848C2.58229 16.9695 2.26178 16.0778 2.1138 15.1749L2.06643 14.8359C2.0253 14.5821 2.00319 14.3257 2 14.0795L2.00311 13.8372C2.0134 10.0655 4.66156 6.80403 8.38809 5.92434L8.64383 5.86807L8.7814 5.84532C9.502 5.74681 10.211 6.12453 10.4978 6.7606ZM9.01643 7.27813L8.93217 7.28772L8.70369 7.33933C5.73526 8.05477 3.6062 10.6103 3.48796 13.621L3.4828 13.8661C3.47569 14.0525 3.4825 14.2392 3.50499 14.4378L3.53277 14.6408C3.63212 15.495 3.90795 16.3206 4.34914 17.0772C5.81632 19.6863 8.86669 21.0367 11.839 20.3929C14.8113 19.7491 16.9936 17.2653 17.1958 14.3414C17.1958 14.2974 17.1774 14.2552 17.1446 14.225C17.1228 14.2049 17.0959 14.1912 17.0675 14.1851L17.024 14.1817L11.459 14.5169C10.9894 14.5503 10.5255 14.3992 10.17 14.0971C9.81456 13.7951 9.59684 13.3669 9.56522 12.91L9.17702 7.42617C9.17632 7.41708 9.17385 7.40822 9.15682 7.37299C9.1315 7.31695 9.07648 7.28131 9.01643 7.27813ZM13.423 2.00105C17.7084 2.12227 21.3029 5.20162 21.9904 9.34084L22 9.4567L21.9977 9.65855C21.9737 9.95621 21.8538 10.2393 21.6545 10.4668C21.4041 10.7524 21.0477 10.9286 20.6588 10.9567L14.0133 11.39C13.1615 11.4382 12.4295 10.8051 12.3741 9.97348L11.9299 3.44914L11.9349 3.30295L11.957 3.13824C12.0162 2.84619 12.1684 2.57938 12.3925 2.37643C12.6739 2.12156 13.0474 1.98661 13.423 2.00105ZM13.4113 3.44902L13.8511 9.87814C13.8537 9.91719 13.888 9.94688 13.9214 9.94502L20.5182 9.51352L20.4854 9.33352C19.8318 6.0802 17.0119 3.66443 13.6287 3.45932L13.4113 3.44902Z" fill="#fff"/>
		</svg>);
		case 'notifications': return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.608 19.6906C14.9045 19.9321 14.9515 20.3713 14.7129 20.6715C14.5366 20.8935 14.3327 21.0922 14.1167 21.255C13.3891 21.826 12.464 22.0849 11.5453 21.9754C10.6258 21.8659 9.787 21.3962 9.21459 20.6689C8.9774 20.3676 9.02646 19.9286 9.32418 19.6885C9.62189 19.4484 10.0555 19.4981 10.2927 19.7995C10.6379 20.2381 11.1467 20.523 11.7064 20.5896C12.2669 20.6564 12.8307 20.4986 13.2826 20.1443C13.4158 20.0437 13.5355 19.927 13.6389 19.7969C13.8775 19.4967 14.3114 19.4491 14.608 19.6906ZM5.15213 8.99974L5.16444 8.40391C5.17324 8.14906 5.18686 7.91248 5.20685 7.68096C5.50654 4.44456 8.59565 2 11.9648 2H12.0361C15.4034 2 18.4934 4.44285 18.8034 7.68536C18.8212 7.89148 18.8288 8.07458 18.8311 8.33206L18.832 9.11982C18.8327 9.19158 18.8339 9.25469 18.8358 9.31353L18.845 9.50977L18.8896 9.69688C19.0303 10.218 19.2776 10.7052 19.6162 11.1282L19.7669 11.3055L19.8286 11.3847C20.2348 11.9917 20.4668 12.698 20.5 13.4587L20.499 13.862C20.4707 14.763 20.1399 15.6331 19.5338 16.3582C18.7311 17.2101 17.6434 17.7393 16.4873 17.8457C13.502 18.1699 10.49 18.1699 7.51296 17.8466C6.34896 17.7346 5.26444 17.2069 4.42663 16.3223C3.80882 15.5691 3.48041 14.6208 3.5009 13.6624L3.50175 13.4242C3.53744 12.6955 3.76804 11.9898 4.16936 11.3802L4.23653 11.2938C4.70525 10.7799 5.02569 10.151 5.16473 9.47306L5.14969 9.53395L5.15213 8.99974ZM12.0361 3.39535H11.9648C9.26651 3.39535 6.80804 5.34087 6.57967 7.80678C6.56798 7.94228 6.55866 8.08207 6.55137 8.2292L6.53532 8.69559L6.52879 9.61486L6.51441 9.75667C6.32444 10.683 5.88728 11.5409 5.24929 12.2404L5.29856 12.1833L5.21045 12.3291C5.04539 12.6265 4.9389 12.9495 4.89682 13.2682L4.87935 13.4587L4.87919 13.6774C4.86568 14.3142 5.08086 14.9356 5.45369 15.3931C6.02881 15.9985 6.80682 16.377 7.65168 16.4583C10.5393 16.7719 13.4527 16.7719 16.3514 16.4572C17.1871 16.3802 17.9645 16.002 18.5084 15.4267C18.92 14.933 19.1375 14.3097 19.1216 13.6536L19.1224 13.4901C19.1013 13.0186 18.951 12.5613 18.6873 12.1672L18.7026 12.1926L18.5647 12.0309C18.0893 11.4441 17.744 10.7635 17.5517 10.034L17.4868 9.75818L17.4739 9.66551C17.4642 9.53013 17.4585 9.40982 17.4555 9.26514L17.4528 8.3605C17.4509 8.13044 17.4447 7.97558 17.4307 7.81326C17.1944 5.34075 14.7336 3.39535 12.0361 3.39535Z" fill="#3B5162"/>
		</svg>
		);
		case 'orders': return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.9857 2C18.0482 2 20 3.43503 20 6.25765V20.3309C20 20.7736 19.8285 21.1982 19.5232 21.5112C19.2179 21.8242 18.8038 22 18.3608 22C18.0965 21.9957 17.8368 21.9291 17.5863 21.7971L11.974 18.6635L6.38442 21.8037C5.7112 22.1624 4.89545 21.9969 4.38431 21.3975L4.28627 21.2719L4.19263 21.1174C4.07042 20.8782 4.00448 20.613 4 20.3309V6.43434C4 3.49929 5.90915 2 9.01434 2H14.9857ZM14.9857 3.44775H9.01434C6.61925 3.44775 5.41205 4.39579 5.41205 6.43434L5.41195 20.3189C5.41267 20.3631 5.42346 20.4065 5.41172 20.3897L5.44919 20.4519C5.51373 20.5421 5.63485 20.5715 5.71962 20.5265L11.3068 17.3883C11.7233 17.1576 12.225 17.1576 12.6435 17.3894L18.2463 20.5173C18.2887 20.5397 18.3355 20.5517 18.372 20.5523C18.4293 20.5523 18.4842 20.529 18.5247 20.4875C18.5652 20.446 18.5879 20.3897 18.5879 20.3309V6.25765C18.5879 4.35788 17.35 3.44775 14.9857 3.44775ZM15.4079 8.31663C15.7978 8.31663 16.1139 8.64072 16.1139 9.0405C16.1139 9.40697 15.8483 9.70984 15.5037 9.75777L15.4079 9.76438H8.54042C8.1505 9.76438 7.8344 9.44029 7.8344 9.0405C7.8344 8.67404 8.10001 8.37117 8.44462 8.32324L8.54042 8.31663H15.4079Z" fill="#FFB572"/>
		</svg>);
		case 'account': return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24" fill="none">
		<path d="M7.59131 12.4563L7.91109 12.4576C12.5555 12.4981 15.1833 13.4361 15.1833 15.9983C15.1833 18.5061 12.6648 19.4736 8.22345 19.5546L7.59131 19.5603C2.74697 19.5603 0.000305176 18.6394 0.000305176 16.0183C0.000305176 13.3937 2.7579 12.4563 7.59131 12.4563ZM7.59131 13.9563C3.57395 13.9563 1.50031 14.6612 1.50031 16.0183C1.50031 17.3667 3.56898 18.0603 7.59131 18.0603C11.6089 18.0603 13.6833 17.3552 13.6833 15.9983C13.6833 14.6505 11.6127 13.9563 7.59131 13.9563ZM15.587 11.7481C16.1676 11.7876 16.7448 11.8708 17.2994 11.9938C18.4875 12.2301 19.3708 12.6713 19.7755 13.5204C20.0743 14.1491 20.0743 14.8806 19.7755 15.5092C19.3731 16.3563 18.499 16.7942 17.3042 17.04C16.8985 17.1234 16.5019 16.8622 16.4185 16.4565C16.335 16.0507 16.5963 15.6542 17.002 15.5707C17.7708 15.4126 18.2826 15.1562 18.4207 14.8654C18.5259 14.6441 18.5259 14.3856 18.4211 14.165C18.282 13.8732 17.7676 13.6163 16.991 13.4616C16.4936 13.3515 15.9908 13.279 15.4852 13.2446C15.072 13.2165 14.7597 12.8587 14.7878 12.4455C14.8159 12.0322 15.1737 11.72 15.587 11.7481ZM7.59131 0.499756C10.4393 0.499756 12.7263 2.78636 12.7263 5.63376C12.7263 8.48197 10.4395 10.7688 7.59131 10.7688C4.74323 10.7688 2.45731 8.48211 2.45731 5.63376C2.45731 2.78622 4.74341 0.499756 7.59131 0.499756ZM14.02 1.56936C16.2549 1.56936 18.067 3.38183 18.067 5.61636C18.067 7.85157 16.2552 9.66336 14.02 9.66336C13.6058 9.66336 13.27 9.32757 13.27 8.91336C13.27 8.49914 13.6058 8.16336 14.02 8.16336C15.4268 8.16336 16.567 7.02314 16.567 5.61636C16.567 4.21019 15.4264 3.06936 14.02 3.06936C13.6058 3.06936 13.27 2.73357 13.27 2.31936C13.27 1.90514 13.6058 1.56936 14.02 1.56936ZM7.59131 1.99976C5.57189 1.99976 3.95731 3.6146 3.95731 5.63376C3.95731 7.65379 5.57176 9.26876 7.59131 9.26876C9.61109 9.26876 11.2263 7.65354 11.2263 5.63376C11.2263 3.61484 9.61096 1.99976 7.59131 1.99976Z" fill="#65B0F6"/>
		</svg>
		);
		case 'settings': return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.6161 2C13.3251 1.99971 14.0041 2.28061 14.4983 2.77871C14.9925 3.27681 15.2599 3.94968 15.2383 4.57766L15.2468 4.72535C15.2641 4.87079 15.3124 5.01116 15.3908 5.14054C15.5435 5.39567 15.7935 5.58081 16.0857 5.65514C16.3779 5.72947 16.6882 5.68688 16.9821 5.51839L17.146 5.4355C18.3759 4.86897 19.8511 5.31918 20.5333 6.47928L21.1465 7.52174C21.1627 7.54922 21.1769 7.57762 21.1892 7.60674L21.2461 7.71842C21.7945 8.86519 21.4043 10.2293 20.3624 10.9223L20.1051 11.0807C19.9706 11.1726 19.8585 11.2926 19.7742 11.4368C19.6218 11.6929 19.58 11.998 19.658 12.2844C19.736 12.5708 19.9272 12.8149 20.2174 12.9793L20.3843 13.0841C20.8887 13.4297 21.253 13.9391 21.4119 14.523C21.5912 15.1817 21.495 15.8833 21.1399 16.4804L20.4803 17.557L20.3808 17.7089C19.6058 18.8008 18.1011 19.1344 16.9527 18.485L16.8166 18.4163C16.6746 18.3541 16.5214 18.3199 16.382 18.316C16.0786 18.3146 15.7872 18.432 15.5727 18.6422C15.3582 18.8524 15.2383 19.1379 15.2391 19.4698L15.231 19.6414C15.12 20.9703 13.9845 22 12.6164 22H11.3811C9.93219 22 8.75765 20.8493 8.75912 19.4753L8.75063 19.3277C8.73337 19.1822 8.68504 19.0418 8.6027 18.9057C8.45336 18.65 8.20591 18.4633 7.91538 18.3871C7.62484 18.3109 7.31529 18.3516 7.01565 18.5213L6.83762 18.6084C6.2746 18.8565 5.63953 18.9023 5.04445 18.7366C4.37306 18.5497 3.80539 18.1083 3.47412 17.5224L2.83679 16.4442L2.75197 16.2844C2.17157 15.0841 2.62651 13.6412 3.78115 12.9875L3.88645 12.9228C4.19491 12.7137 4.37987 12.3688 4.37987 12C4.37987 11.599 4.16149 11.2284 3.77948 11.0115L3.62449 10.9141C2.51001 10.1548 2.16949 8.68049 2.85989 7.50696L3.50918 6.46166C4.23128 5.23376 5.83155 4.81017 7.06235 5.50171L7.19559 5.5713C7.33141 5.63238 7.47895 5.6648 7.62101 5.66628C8.24742 5.66634 8.75775 5.17352 8.76724 4.54181L8.77575 4.3478C8.82704 3.74716 9.09307 3.1827 9.52796 2.75457C10.0186 2.27155 10.6855 2 11.3811 2H12.6161ZM12.6164 3.44774H11.3811C11.0786 3.44774 10.7887 3.56581 10.5753 3.77582C10.3863 3.96196 10.2706 4.20741 10.2503 4.43661L10.2368 4.7415C10.1334 6.07087 8.99969 7.11416 7.61326 7.11398C7.25588 7.11034 6.90355 7.03293 6.54427 6.87026L6.3519 6.77085C5.8038 6.46315 5.1049 6.64815 4.78057 7.19925L4.13128 8.24455C3.83377 8.75044 3.98256 9.39466 4.44324 9.70925L4.70395 9.871C5.42196 10.3467 5.85754 11.1429 5.85754 12C5.85754 12.8446 5.43413 13.634 4.70219 14.1296L4.54639 14.2256C4.03354 14.5163 3.83562 15.144 4.07398 15.6383L4.13027 15.7449L4.75952 16.8084C4.90728 17.0696 5.1552 17.2624 5.44842 17.344C5.70831 17.4164 5.98569 17.3964 6.20208 17.3018L6.3108 17.2497C6.91096 16.9066 7.62614 16.8126 8.29737 16.9886C8.96861 17.1645 9.54028 17.5959 9.87937 18.1768C10.0618 18.478 10.1772 18.8132 10.2219 19.1985L10.2421 19.552C10.3043 20.1145 10.7905 20.5523 11.3811 20.5523H12.6164C13.2137 20.5523 13.7099 20.1023 13.7565 19.5511L13.7621 19.4421C13.7588 18.7585 14.0345 18.1019 14.5279 17.6185C15.0212 17.1351 15.6914 16.865 16.4053 16.8686C16.7556 16.8778 17.1004 16.9547 17.4528 17.11L17.7687 17.2682C18.2647 17.4814 18.8529 17.3258 19.1511 16.9067L19.2236 16.7957L19.868 15.7436C20.0203 15.4875 20.0621 15.1824 19.9841 14.896C19.915 14.6422 19.7566 14.4207 19.5645 14.2882L19.2922 14.1195C18.7716 13.7748 18.3932 13.2563 18.2302 12.6574C18.0509 11.9987 18.1471 11.2971 18.4946 10.7126C18.6849 10.3872 18.9464 10.1073 19.2873 9.87532L19.448 9.77613C19.9601 9.4827 20.1578 8.85504 19.9212 8.35884L19.8505 8.22529L19.8378 8.19726L19.253 7.20208C18.9764 6.73175 18.4008 6.52853 17.9125 6.6891L17.8015 6.73265L17.6983 6.78415C17.1001 7.12941 16.3863 7.22736 15.7143 7.05641C15.0423 6.88546 14.4673 6.45965 14.1181 5.87616C13.9357 5.57504 13.8203 5.23984 13.7756 4.85454L13.7624 4.60249C13.7713 4.29923 13.6546 4.00536 13.4387 3.78783C13.2229 3.57029 12.9264 3.44774 12.6164 3.44774ZM12.0032 8.73182C13.8455 8.73182 15.339 10.195 15.339 12C15.339 13.805 13.8455 15.2682 12.0032 15.2682C10.161 15.2682 8.66748 13.805 8.66748 12C8.66748 10.195 10.161 8.73182 12.0032 8.73182ZM12.0032 10.1796C10.977 10.1796 10.1452 10.9946 10.1452 12C10.1452 13.0054 10.977 13.8204 12.0032 13.8204C13.0294 13.8204 13.8613 13.0054 13.8613 12C13.8613 10.9946 13.0294 10.1796 12.0032 10.1796Z" fill="#3B5162"/>
		</svg>
		);
		case 'logout': return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path  d="M11.331 2.02148C13.7102 2.02148 15.6521 3.89542 15.7611 6.24772L15.766 6.45648V7.38948C15.766 7.8037 15.4302 8.13948 15.016 8.13948C14.6363 8.13948 14.3225 7.85733 14.2728 7.49125L14.266 7.38948V6.45648C14.266 4.89358 13.044 3.61575 11.5034 3.52647L11.331 3.52148H6.45597C4.89392 3.52148 3.61623 4.74362 3.52696 6.28406L3.52197 6.45648V17.5865C3.52197 19.1493 4.74388 20.4272 6.28363 20.5165L6.45597 20.5215H11.341C12.8983 20.5215 14.172 19.3039 14.261 17.7693L14.266 17.5975V16.6545C14.266 16.2403 14.6018 15.9045 15.016 15.9045C15.3957 15.9045 15.7095 16.1866 15.7591 16.5527L15.766 16.6545V17.5975C15.766 19.9687 13.8992 21.9046 11.5553 22.0164L11.341 22.0215H6.45597C4.07753 22.0215 2.13581 20.1474 2.0268 17.7952L2.02197 17.5865V6.45648C2.02197 4.07743 3.89573 2.13535 6.24728 2.02631L6.45597 2.02148H11.331ZM19.326 8.50234L19.4103 8.57478L22.3383 11.4898C22.3647 11.5159 22.3878 11.5426 22.409 11.5707L22.3383 11.4898C22.3689 11.5202 22.3963 11.5526 22.4205 11.5865C22.4376 11.6103 22.4533 11.6354 22.4676 11.6614C22.4702 11.6665 22.4728 11.6715 22.4754 11.6764C22.4881 11.7004 22.4993 11.7253 22.5092 11.7508C22.5132 11.762 22.5173 11.7733 22.5211 11.7847C22.5284 11.8058 22.5345 11.8274 22.5397 11.8494C22.5421 11.8612 22.5445 11.8729 22.5467 11.8846C22.5508 11.905 22.5538 11.9261 22.5559 11.9474C22.557 11.9623 22.558 11.977 22.5586 11.9917C22.5593 12.0016 22.5595 12.0115 22.5595 12.0214L22.5586 12.0497C22.5581 12.0651 22.557 12.0805 22.5555 12.0958L22.5595 12.0214C22.5595 12.0682 22.5552 12.1141 22.547 12.1585C22.5445 12.1696 22.5421 12.1814 22.5394 12.193C22.5343 12.2162 22.5279 12.2387 22.5205 12.2607C22.5167 12.2709 22.513 12.2813 22.509 12.2915C22.4997 12.3164 22.4889 12.3405 22.4769 12.3639C22.4739 12.3692 22.4708 12.3751 22.4675 12.381C22.4331 12.4443 22.39 12.5015 22.3398 12.5517L22.3384 12.5527L19.4104 15.4687C19.1169 15.761 18.642 15.76 18.3498 15.4665C18.084 15.1997 18.0607 14.783 18.2791 14.4898L18.3519 14.4059L19.991 12.7705L9.76847 12.7714C9.35426 12.7714 9.01847 12.4356 9.01847 12.0214C9.01847 11.6417 9.30063 11.3279 9.6667 11.2782L9.76847 11.2714L19.993 11.2705L18.352 9.63779C18.0852 9.37212 18.06 8.95551 18.2772 8.66142L18.3497 8.57714C18.6153 8.31028 19.0319 8.28514 19.326 8.50234Z" fill='none'/>
		</svg>);
		case 'basket': return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path d="M1.66663 1.66663H3.11663C4.01663 1.66663 4.72496 2.44163 4.64996 3.33329L3.95829 11.6333C3.93129 11.9548 3.97137 12.2785 4.07599 12.5838C4.18061 12.889 4.3475 13.1692 4.56608 13.4066C4.78465 13.644 5.05015 13.8333 5.34575 13.9627C5.64135 14.0921 5.96061 14.1587 6.28329 14.1583H15.1583C16.3583 14.1583 17.4083 13.175 17.5 11.9833L17.95 5.73329C18.05 4.34996 17 3.22496 15.6083 3.22496H4.84996M7.49996 6.66663H17.5M13.5416 18.3333C13.8179 18.3333 14.0828 18.2235 14.2782 18.0282C14.4735 17.8328 14.5833 17.5679 14.5833 17.2916C14.5833 17.0154 14.4735 16.7504 14.2782 16.5551C14.0828 16.3597 13.8179 16.25 13.5416 16.25C13.2654 16.25 13.0004 16.3597 12.8051 16.5551C12.6097 16.7504 12.5 17.0154 12.5 17.2916C12.5 17.5679 12.6097 17.8328 12.8051 18.0282C13.0004 18.2235 13.2654 18.3333 13.5416 18.3333ZM6.87496 18.3333C7.15123 18.3333 7.41618 18.2235 7.61153 18.0282C7.80688 17.8328 7.91663 17.5679 7.91663 17.2916C7.91663 17.0154 7.80688 16.7504 7.61153 16.5551C7.41618 16.3597 7.15123 16.25 6.87496 16.25C6.59869 16.25 6.33374 16.3597 6.13839 16.5551C5.94304 16.7504 5.83329 17.0154 5.83329 17.2916C5.83329 17.5679 5.94304 17.8328 6.13839 18.0282C6.33374 18.2235 6.59869 18.3333 6.87496 18.3333Z" stroke="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>);
		case 'trash': return(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2 -1 20 20" fill="none">
		<path d="M13.7325 6.26576L13.8153 6.26689C14.1229 6.29232 14.3587 6.54771 14.375 6.85513L14.3671 7.02653L14.105 10.2359L13.8301 13.3679C13.7719 13.9931 13.7198 14.5205 13.6749 14.9356C13.5187 16.3824 12.5796 17.277 11.1638 17.3035C8.95781 17.3443 6.83731 17.3438 4.7781 17.2993C3.40331 17.2705 2.47805 16.3661 2.32462 14.9415L2.21858 13.8919L2.03328 11.8559L1.84347 9.6218L1.62643 6.93998C1.59946 6.5959 1.84959 6.29454 2.18512 6.26688C2.49269 6.24152 2.76525 6.45495 2.82932 6.75573L2.85426 7.00152L3.05805 9.51568L3.28057 12.1216C3.38038 13.2498 3.46695 14.1627 3.53622 14.8041C3.62365 15.6159 4.05115 16.0337 4.80343 16.0495C6.84654 16.0937 8.95123 16.0941 11.1417 16.0537C11.9398 16.0387 12.374 15.625 12.4633 14.7979L12.5689 13.7539C12.5998 13.4322 12.6328 13.077 12.6678 12.6912L12.8905 10.1282L13.1588 6.83966C13.1836 6.52426 13.4327 6.2825 13.7325 6.26576ZM1.10949 4.8244C0.772879 4.8244 0.5 4.54457 0.5 4.19938C0.5 3.88295 0.729294 3.62145 1.02679 3.58006L1.10949 3.57435H3.76476C4.0803 3.57435 4.35654 3.36615 4.45535 3.06616L4.47953 2.97352L4.68587 1.92119C4.86759 1.22422 5.45767 0.727992 6.14916 0.672024L6.27993 0.666748H9.7199C10.4229 0.666748 11.0436 1.12198 11.2826 1.8254L11.3228 1.96015L11.5203 2.97327C11.5822 3.29068 11.8354 3.52775 12.1417 3.56822L12.2351 3.57435H14.8905C15.2271 3.57435 15.5 3.85419 15.5 4.19938C15.5 4.5158 15.2707 4.77731 14.9732 4.81869L14.8905 4.8244H1.10949ZM9.7199 1.91679H6.27993C6.10892 1.91679 5.95691 2.01944 5.89377 2.14844L5.87235 2.20511L5.67483 3.21873C5.65067 3.34245 5.61566 3.46158 5.57093 3.57518L10.429 3.57534C10.4011 3.50447 10.377 3.43144 10.3569 3.35648L10.325 3.21848L10.1364 2.24408C10.0923 2.07501 9.95612 1.95123 9.79185 1.92293L9.7199 1.91679Z" fill="#EA736D"/>
		</svg>);
		case 'heart': return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-1 -1 16 16" fill="none">
		<path d="M3.32211 0.87682C4.49364 0.49998 5.76133 0.635586 6.82203 1.23745L6.99763 1.34282L7.17638 1.23686C8.18203 0.667493 9.37496 0.515351 10.4976 0.824114L10.6747 0.876859C13.1232 1.66516 14.2194 4.33863 13.3958 6.89673C12.9829 8.0867 12.3056 9.1656 11.4117 10.0549C10.1952 11.2363 8.85417 12.2796 7.41459 13.1648L7.26176 13.2598C7.10658 13.3562 6.91045 13.3579 6.75367 13.264L6.58996 13.166C5.1484 12.2796 3.80738 11.2363 2.58673 10.0508C1.69694 9.1656 1.01969 8.0867 0.603254 6.8863C-0.217383 4.33708 0.874385 1.66488 3.32211 0.87682ZM6.58314 2.23614C5.71375 1.64189 4.62225 1.48222 3.62106 1.80426C1.72501 2.4147 0.865425 4.51863 1.52809 6.57753C1.89255 7.62779 2.49007 8.57968 3.27059 9.35619C4.43587 10.4879 5.72037 11.4872 7.09607 12.3332L7.00088 12.2732L7.31279 12.077C8.40174 11.3739 9.42738 10.5761 10.3758 9.6947L10.7278 9.36029C11.5125 8.57968 12.11 7.62779 12.471 6.58795C13.1365 4.5206 12.2732 2.41519 10.3761 1.80442C9.32488 1.46717 8.17738 1.66034 7.2907 2.32413C7.12046 2.45157 6.88719 2.45404 6.71429 2.33021L6.58314 2.23614ZM9.58021 3.32245C10.4612 3.60363 11.0859 4.39235 11.1639 5.31898C11.1864 5.58709 10.9872 5.82272 10.7188 5.84525C10.4505 5.86779 10.2147 5.66871 10.1921 5.4006C10.1471 4.86531 9.78765 4.41153 9.28348 4.25061C9.02697 4.16873 8.88545 3.89459 8.96739 3.63829C9.04933 3.38198 9.3237 3.24058 9.58021 3.32245Z" fill="none"/>
	</svg>);
		case 'security': return (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
		<path d="M6.00674 0.333402C7.54966 0.333402 8.90529 1.29938 9.40214 2.71113C9.49398 2.97207 9.35341 3.25684 9.08817 3.34719C8.82294 3.43754 8.53348 3.29925 8.44164 3.03831C8.08545 2.02623 7.11313 1.3334 6.00472 1.3334C4.62673 1.32803 3.49704 2.38767 3.42213 3.72388L3.4182 3.85403L3.41816 4.75071L8.58904 4.75094C10.2402 4.75094 11.5878 6.03051 11.6635 7.63696L11.6668 7.77953V10.6381C11.6668 12.3108 10.2888 13.6667 8.58904 13.6667H3.41128C1.71152 13.6667 0.333496 12.3108 0.333496 10.6381V7.77953C0.333496 6.45489 1.19775 5.32888 2.40163 4.91767L2.40175 3.85184C2.41044 1.90059 4.02518 0.325698 6.00674 0.333402ZM8.58904 5.75091H3.41128C2.27293 5.75091 1.34994 6.65912 1.34994 7.77953V10.6381C1.34994 11.7585 2.27293 12.6667 3.41128 12.6667H8.58904C9.7274 12.6667 10.6504 11.7585 10.6504 10.6381V7.77953C10.6504 6.65912 9.7274 5.75091 8.58904 5.75091ZM6.0003 7.96832C6.25759 7.96832 6.47023 8.15642 6.50388 8.40046L6.50852 8.46831V9.9496C6.50852 10.2257 6.28098 10.4496 6.0003 10.4496C5.74301 10.4496 5.53037 10.2615 5.49672 10.0174L5.49208 9.9496V8.46831C5.49208 8.19217 5.71962 7.96832 6.0003 7.96832Z" fill="none"/>
		</svg>);
		case 'info': return (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
		<path d="M7.00016 0.333496C10.6821 0.333496 13.6668 3.31847 13.6668 7.00016C13.6668 10.6819 10.6821 13.6668 7.00016 13.6668C3.31869 13.6668 0.333496 10.6816 0.333496 7.00016C0.333496 3.31869 3.31869 0.333496 7.00016 0.333496ZM7.00016 1.3335C3.87097 1.3335 1.3335 3.87097 1.3335 7.00016C1.3335 10.1294 3.87097 12.6668 7.00016 12.6668C10.1298 12.6668 12.6668 10.1296 12.6668 7.00016C12.6668 3.87073 10.1298 1.3335 7.00016 1.3335ZM7.00356 9.03076C7.2797 9.03076 7.50356 9.25462 7.50356 9.53076C7.50356 9.78389 7.31546 9.99309 7.07141 10.0262L6.9969 10.0308C6.72075 10.0308 6.4969 9.8069 6.4969 9.53076C6.4969 9.27763 6.685 9.06844 6.92905 9.03533L7.00356 9.03076ZM6.9969 3.96956C7.25003 3.96956 7.45922 4.15767 7.49233 4.40172L7.4969 4.46956V7.41556C7.4969 7.6917 7.27304 7.91556 6.9969 7.91556C6.74377 7.91556 6.53457 7.72746 6.50146 7.48341L6.4969 7.41556V4.46956C6.4969 4.19342 6.72075 3.96956 6.9969 3.96956Z" fill="none"/>
		</svg>);
		case 'management': return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-3 -4 24 24" fill="none">
		<path d="M14.4257 9.7271C16.155 9.7271 17.5609 11.1148 17.5609 12.8219C17.5609 14.528 16.155 15.9167 14.4257 15.9167C12.6963 15.9167 11.2904 14.528 11.2904 12.8219C11.2904 11.1148 12.6963 9.7271 14.4257 9.7271ZM14.4257 11.1787C13.5071 11.1787 12.761 11.9151 12.761 12.8219C12.761 13.7277 13.5071 14.4651 14.4257 14.4651C15.3443 14.4651 16.0903 13.7277 16.0903 12.8219C16.0903 11.9151 15.3443 11.1787 14.4257 11.1787ZM7.65882 12.0958C8.0647 12.0958 8.3941 12.421 8.3941 12.8216C8.3941 13.2223 8.0647 13.5474 7.65882 13.5474H1.6305C1.22462 13.5474 0.895218 13.2223 0.895218 12.8216C0.895218 12.421 1.22462 12.0958 1.6305 12.0958H7.65882ZM4.02977 0.083374C5.75915 0.083374 7.16501 1.47207 7.16501 3.17818C7.16501 4.88429 5.75915 6.27298 4.02977 6.27298C2.30137 6.27298 0.894531 4.88429 0.894531 3.17818C0.894531 1.47207 2.30137 0.083374 4.02977 0.083374ZM4.02977 1.53497C3.11214 1.53497 2.36509 2.27238 2.36509 3.17818C2.36509 4.08397 3.11214 4.82138 4.02977 4.82138C4.94838 4.82138 5.69445 4.08397 5.69445 3.17818C5.69445 2.27238 4.94838 1.53497 4.02977 1.53497ZM16.8259 2.45257C17.2318 2.45257 17.5612 2.77773 17.5612 3.17837C17.5612 3.57901 17.2318 3.90417 16.8259 3.90417H10.7966C10.3907 3.90417 10.0613 3.57901 10.0613 3.17837C10.0613 2.77773 10.3907 2.45257 10.7966 2.45257H16.8259Z" fill="white"/>
		</svg>);
		case 'dollar': return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<circle cx="12" cy="12" r="9" stroke="#4658BC" strokeWidth="1.8"/>
		<path d="M10.459 9.94112C10.459 9.34702 10.916 8.97489 11.5362 8.90307V10.9988C11.471 10.9857 11.4122 10.9661 11.3534 10.9465C10.7593 10.7507 10.459 10.4112 10.459 9.94112ZM13.7233 14.015C13.7233 14.6548 13.2337 15.0792 12.5417 15.1379V12.8855C12.5874 12.8986 12.6331 12.9116 12.6722 12.9182C13.4034 13.1206 13.7233 13.4796 13.7233 14.015ZM12.5547 17.3772L12.5482 16.5481C14.337 16.3783 15.473 15.3925 15.473 13.8387C15.473 12.2588 14.4088 11.5929 13.0966 11.3121L12.5417 11.1946V8.91613C13.2337 9.02712 13.6189 9.54941 13.6385 10.0717H15.3098C15.2837 8.71374 14.2195 7.68222 12.5678 7.50595V6.65723H11.5101V7.49942C9.9302 7.64305 8.68976 8.51136 8.68976 10.0782C8.68976 11.5602 9.76046 12.3175 10.9748 12.5852L11.5362 12.7093V15.1379C10.7006 15.0269 10.2632 14.5242 10.2305 13.9236H8.52002C8.53308 15.1314 9.34263 16.4045 11.5036 16.5611L11.4971 17.3772H12.5547Z" fill="#4658BC"/>
		</svg>);
		case 'arrow': return (<svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
		<path d="M4.99994 11.25C4.75473 11.25 4.55208 11.0704 4.52 10.8375L4.51558 10.7727L4.51583 2.38275L1.45258 5.4139C1.26384 5.60069 0.957161 5.60134 0.767603 5.41535C0.595277 5.24628 0.579065 4.98116 0.719347 4.79402L0.766127 4.74039L4.65645 0.890391L4.66665 0.880955C4.67711 0.871178 4.68801 0.861857 4.69932 0.853023L4.65645 0.890391C4.67519 0.871842 4.6951 0.855129 4.71594 0.840253C4.72903 0.831259 4.74262 0.822533 4.75666 0.814481C4.7879 0.796293 4.82059 0.782199 4.85421 0.771802C4.86606 0.768299 4.87816 0.765043 4.89044 0.762247C4.89982 0.759973 4.90934 0.758103 4.91891 0.756517C4.92928 0.754931 4.93965 0.753548 4.95012 0.752494C4.96063 0.751299 4.97138 0.750566 4.98213 0.750184C4.98809 0.750105 4.994 0.75 4.99994 0.75L5.01602 0.750143C5.02795 0.750537 5.03986 0.751363 5.05174 0.752622L4.99994 0.75C5.02759 0.75 5.05471 0.752285 5.0811 0.756673C5.09313 0.758633 5.1052 0.761117 5.11719 0.764057C5.12671 0.766415 5.13606 0.769008 5.14529 0.771866C5.15626 0.775239 5.16731 0.779094 5.17823 0.783356C5.18951 0.787781 5.20053 0.792567 5.21133 0.797737C5.2196 0.801655 5.22812 0.806039 5.23653 0.81069C5.25231 0.819464 5.26712 0.828751 5.28135 0.838779C5.28358 0.840356 5.28604 0.842124 5.28848 0.843918C5.3101 0.859835 5.32917 0.876334 5.34683 0.894191L9.23384 4.74036C9.4226 4.92713 9.42197 5.22933 9.23243 5.41533C9.06011 5.58442 8.791 5.59927 8.60168 5.46025L8.54745 5.41393L5.48475 2.38333L5.48429 10.7727C5.48429 11.0363 5.26744 11.25 4.99994 11.25Z" fill="none"/>
		</svg>);
		case 'logo': return (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
		<path d="M31.6668 3.33337H8.3335C5.57683 3.33337 3.3335 5.57671 3.3335 8.33337V13.0517C3.3335 14.8067 3.97016 16.4017 5.00016 17.6284V33.3334C5.00016 33.7754 5.17576 34.1993 5.48832 34.5119C5.80088 34.8244 6.2248 35 6.66683 35H20.0002C20.4422 35 20.8661 34.8244 21.1787 34.5119C21.4912 34.1993 21.6668 33.7754 21.6668 33.3334V25H28.3335V33.3334C28.3335 33.7754 28.5091 34.1993 28.8216 34.5119C29.1342 34.8244 29.5581 35 30.0002 35H33.3335C33.7755 35 34.1994 34.8244 34.512 34.5119C34.8246 34.1993 35.0002 33.7754 35.0002 33.3334V17.6267C36.0302 16.4017 36.6668 14.8067 36.6668 13.05V8.33337C36.6668 5.57671 34.4235 3.33337 31.6668 3.33337ZM33.3335 8.33337V13.0517C33.3335 14.9517 31.9185 16.5717 30.1818 16.6634L30.0002 16.6667C28.1618 16.6667 26.6668 15.1717 26.6668 13.3334V6.66671H31.6668C32.5868 6.66671 33.3335 7.41504 33.3335 8.33337ZM16.6668 13.3334V6.66671H23.3335V13.3334C23.3335 15.1717 21.8385 16.6667 20.0002 16.6667C18.1618 16.6667 16.6668 15.1717 16.6668 13.3334ZM6.66683 8.33337C6.66683 7.41504 7.4135 6.66671 8.3335 6.66671H13.3335V13.3334C13.3335 15.1717 11.8385 16.6667 10.0002 16.6667L9.8185 16.6617C8.08183 16.5717 6.66683 14.9517 6.66683 13.0517V8.33337ZM16.6668 26.6667H10.0002V21.6667H16.6668V26.6667Z" fill="url(#paint0_linear_1302_8006)"/>
		<defs>
		<linearGradient id="paint0_linear_1302_8006" x1="20.0002" y1="3.33337" x2="20.0002" y2="35" gradientUnits="userSpaceOnUse">
		<stop stopColor="#EA9769"/>
		<stop offset="1" stopColor="#EA6969"/>
		</linearGradient>
		</defs>
		</svg>);
		case 'layout': return (
			<svg xmlns="http://www.w3.org/2000/svg" width="93" height="105" viewBox="0 0 93 105" fill="none">
		<path d="M0 24C0 17.3726 5.37258 12 12 12H92V92H12C5.37259 92 0 86.6274 0 80V24Z" fill="#252836"/>
		<path d="M88.5 8C92.5 4 92 0 92 0V12H80C80 12 84.5 12 88.5 8Z" fill="#252836"/>
		<path d="M88.01 95.51C84.01 91.51 80.01 92.01 80.01 92.01H92.01V104.01C92.01 104.01 92.01 99.51 88.01 95.51Z" fill="#252836"/>
		</svg>
		);
		case 'plus': return (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
			<path d="M10 2.5V10M10 17.5V10M10 10H17.5M10 10H2.5" stroke="#eee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
		);
		case 'edit': return (
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M14.9512 14.0075C15.2543 14.0075 15.5 14.2484 15.5 14.5455C15.5 14.8178 15.2935 15.0429 15.0257 15.0785L14.9512 15.0834H9.22583C8.92274 15.0834 8.67705 14.8426 8.67705 14.5455C8.67705 14.2731 8.8835 14.0481 9.15136 14.0124L9.22583 14.0075H14.9512ZM9.38269 1.6806C10.4217 0.662132 12.1069 0.662132 13.1459 1.6806L14.2245 2.73791C15.2635 3.75638 15.2635 5.40829 14.2245 6.42675L6.11717 14.3739C5.65359 14.8283 5.02506 15.0833 4.36901 15.0833H1.04878C0.740346 15.0833 0.492487 14.8342 0.500174 14.532L0.583693 11.248C0.600298 10.6273 0.859392 10.0355 1.30722 9.59653L9.38269 1.6806ZM8.755 3.81592L2.08332 10.3573C1.83438 10.6013 1.69012 10.9308 1.68089 11.2755L1.61121 14.0071L4.36901 14.0075C4.69352 14.0075 5.00559 13.8955 5.2519 13.6932L5.34108 13.6131L12.0458 7.04092L8.755 3.81592ZM12.3698 2.44136C11.7594 1.84305 10.7691 1.84305 10.1588 2.44136L9.53167 3.05508L12.8217 6.28008L13.4484 5.66599C14.0249 5.10092 14.0569 4.20369 13.5445 3.60171L13.4484 3.49867L12.3698 2.44136Z" fill="none"/>
			</svg>
		);
		case 'arrow-select': return (
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M6.00001 6.33328C5.81001 6.33328 5.62084 6.26911 5.46667 6.13995L0.466672 1.97328C0.113339 1.67911 0.0650056 1.15328 0.360006 0.799946C0.654172 0.446612 1.17917 0.399112 1.53334 0.693279L6.00917 4.42328L10.4775 0.827446C10.8358 0.539112 11.3608 0.595779 11.6492 0.954113C11.9375 1.31245 11.8808 1.83661 11.5225 2.12578L6.52251 6.14911C6.37001 6.27161 6.18501 6.33328 6.00001 6.33328Z" fill="white"/>
</svg>
		);
		case 'search': return (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2 -2 20 20" fill="none">
				<path fillRule="evenodd" clipRule="evenodd" d="M2.16667 7.16667C2.16667 4.40917 4.40917 2.16667 7.16667 2.16667C9.92417 2.16667 12.1667 4.40917 12.1667 7.16667C12.1667 9.92417 9.92417 12.1667 7.16667 12.1667C4.40917 12.1667 2.16667 9.92417 2.16667 7.16667M15.2558 14.0775L12.4267 11.2475C13.3042 10.1192 13.8333 8.705 13.8333 7.16667C13.8333 3.49083 10.8425 0.5 7.16667 0.5C3.49083 0.5 0.5 3.49083 0.5 7.16667C0.5 10.8425 3.49083 13.8333 7.16667 13.8333C8.705 13.8333 10.1192 13.3042 11.2475 12.4267L14.0775 15.2558C14.24 15.4183 14.4533 15.5 14.6667 15.5C14.88 15.5 15.0933 15.4183 15.2558 15.2558C15.5817 14.93 15.5817 14.4033 15.2558 14.0775" fill="white"/>
			</svg>
		)
		default: return <svg></svg>;
	}
}