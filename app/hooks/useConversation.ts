import { useParams } from "next/navigation";
import { useMemo } from "react";

// Custom hook to manage conversation-related data
const useConversation = () => {
    // Get parameters from the URL url.../conversations/1928210ß3
    const params = useParams();

    // Memoized value for conversationId based on URL parameters
    const conversationId = useMemo(() => {
        // If conversationId is not present in params, return an empty string
        if (!params?.conversationId) { // 1928210ß3
            return '';
        }

        // Return conversationId as a string
        return params.conversationId as string;
    }, [params?.conversationId]);

    // Memoized value to determine if a conversation is open
    const isOpen = useMemo(() => !!conversationId, [conversationId]);

    // Return memoized values - isOpen and conversationId
    return useMemo(() => ({
        isOpen,
        conversationId
    }), [isOpen, conversationId]);
};

export default useConversation;
