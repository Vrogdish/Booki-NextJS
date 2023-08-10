/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        // unoptimized : true,
        remotePatterns:[
            {
                protocol:"https",
                hostname:"firebasestorage.googleapis.com",

            }
        ]
    },
    // output : "export"
}

module.exports = nextConfig
