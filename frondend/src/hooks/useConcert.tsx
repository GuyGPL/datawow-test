import { fetchConcerts } from "@/services/concerts.service";
import { ConcertsResponse } from "@/types/concerts.response.dto";
import { useQuery } from "@tanstack/react-query";

type UseConcertReturnType = {
    concertList: ConcertsResponse | undefined;
};

// TODO integrate hook with HomeContainer
export default function useConcert(): UseConcertReturnType {
    const { data: concertList } = useQuery({
        queryKey: ["concerts"],
        queryFn: async () => await fetchConcerts(),
    });

    return { concertList };
}
