
import { FaKey, FaLock, FaUsers, FaShieldAlt, FaNetworkWired, FaUserCog } from "react-icons/fa";

export const features = [
    {
        "icon": <FaUsers />,
        "title": "Decentralized Identity Management",
        "description": "Seamlessly manage your identity across different blockchain networks and decentralized identity systems, creating a unified and self-sovereign identity."
    },
    {
        "icon": <FaUserCog />,
        "title": "Self-Sovereign Key Management",
        "description": "Empower yourself to have complete control over your private keys. Interweb ID enables self-sovereign identity and key management, ensuring you can manage and if needed, share information securely and privately."
    },
    {
        "icon": <FaKey />,
        "title": "Mnemonic Phrase Generation",
        "description": "Easily generate human-readable mnemonic phrases that serve as strong cryptographic keys for accessing your sensitive services."
    },
    {
        "icon": <FaLock />,
        "title": "String Encryption and Decryption",
        "description": "Encrypt and decrypt your sensitive data, such as private keys and personal information, with advanced encryption algorithms."
    },
    {
        "icon": <FaShieldAlt />,
        "title": "Enhanced Security",
        "description": "Interweb ID uses Shamir Secret Sharing to split mnemonic phrases into shares, ensuring enhanced security and mitigating single points of failure."
    },
    {
        "icon": <FaNetworkWired />,
        "title": "Cross-Chain Compatibility",
        "description": "Interweb ID is designed to work across various blockchain ecosystems, allowing you to access services on different chains with ease."
    }
]
